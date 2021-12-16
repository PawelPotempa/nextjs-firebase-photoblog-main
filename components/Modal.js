import React, { useRef, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

import {
  Background,
  ModalWrapper,
  CloseModalButton,
  Left,
  LeftInput,
  LeftTextarea,
  LeftBtn,
  Right,
  Map,
  AboutSocials,
  AboutSocialLink,
  AboutFB,
  AboutIG,
  AboutData,
  LinksContainer,
} from "../styles/modalElements";

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vrym8b8",
        "template_whkix6r",
        e.target,
        "user_xPc0cuHMo9Uq5FSpQ5PTM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Wiadomość wysłana!");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Oops! Coś poszło nie tak. Spróbuj ponownie bądź wybierz inną formę kontaktu."
          );
        }
      );
    e.target.reset();
  }

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <AnimatePresence exitBeforeEnter>
            <ModalWrapper
              showModal={showModal}
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Left>
                <form onSubmit={sendEmail}>
                  <h2> Kontakt </h2>
                  <LeftInput type="text" name="name" placeholder="Twoje imię" />
                  <LeftInput
                    type="email"
                    name="email"
                    placeholder="Twój adres e-mail"
                  />
                  <LeftInput
                    type="text"
                    name="subject"
                    placeholder="Temat wiadomości"
                  />
                  <LeftTextarea name="message" placeholder="Treść wiadomości" />
                  <LeftBtn type="submit" value="Submit">
                    Wyślij
                  </LeftBtn>
                </form>
              </Left>
              <Right>
                <Map
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20144.816879777547!2d20.62875561394472!3d50.86630935421453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47178818af891105%3A0x5025d8b8c0cdcdf3!2sKielce!5e0!3m2!1spl!2spl!4v1639242898511!5m2!1spl!2spl"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></Map>
                <AboutSocials>
                  <AboutData>
                    ... lub skontaktuj się ze mną bezpośrednio za pośrednictwem
                    którejkolwiek z metod poniżej!
                  </AboutData>
                  <AboutData>photopassio.kielce@gmail.pl</AboutData>
                  <AboutData>+48 123 456 789</AboutData>

                  <LinksContainer>
                    <AboutSocialLink
                      target="_blank"
                      href="https://www.facebook.com/PhotoPassio/"
                      rel="noopener noreferrer"
                    >
                      <AboutFB />
                    </AboutSocialLink>
                    <AboutSocialLink
                      target="_blank"
                      href="https://www.instagram.com/photopassio.ck/"
                      rel="noopener noreferrer"
                    >
                      <AboutIG />
                    </AboutSocialLink>
                  </LinksContainer>
                </AboutSocials>
              </Right>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </AnimatePresence>
        </Background>
      ) : null}
    </>
  );
};
