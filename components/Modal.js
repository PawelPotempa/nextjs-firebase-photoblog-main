import React, { useRef, useEffect, useCallback } from "react";
// import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { useSpring, animated } from "react-spring";
// import FAQ from "../FAQ";

import {
  Background,
  ModalWrapper,
  CloseModalButton,
  Left,
  LeftInput,
  LeftTextarea,
  LeftBtn,
  Right,
} from "../styles/modalElements";

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

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

  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <Left>
                <h2> Kontakt </h2>
                <LeftInput type="text" placeholder="Twoje imię" />
                <LeftInput type="email" placeholder="Twój adres e-mail" />
                <LeftInput type="text" placeholder="Temat wiadomości" />
                <LeftTextarea placeholder="Treść wiadomości" />
                <LeftBtn>Wyślij</LeftBtn>
              </Left>
              <Right>{/* <FAQ /> */}</Right>
              {/* <ModalImg src={CameraImg} alt="camera" /> */}
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
