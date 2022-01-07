import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "../components/Modal";
import {
  AboutContainer,
  AboutDesc,
  AboutPersonal,
  AboutPhoto,
  AboutDataContainer,
  AboutData,
  AboutSocials,
  AboutFB,
  AboutIG,
  AboutContact,
  AboutSocialLink,
} from "../styles/aboutElements";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AboutContainer>
        <AboutDesc>
          <h1>Cześć!</h1>
          <h2>
            Jestem Iwona, opowiem Wam coś o sobie. Zawodowo jestem higienistką
            stomatologiczną. Profesjonalną higienizację, którą wykonuję łącze ze
            swoją pasją-fotografią. W gabinecie dbam o piękny uśmiech moich
            pacjentów, a z aparatem w dłoni uwieczniam Wasze wspomnienia.
          </h2>
          <p>
            Pasja do fotografii uwalnia moje pokłady kreatywności. W moich
            kadrach staram się uchwycić emocje, jakie towarzyszą Wam podczas
            ważnych uroczystości czy rodzinnego spaceru. Na Naszych spotkaniach
            dbam o luźną atmosferę, co gwarantuje naturalne zdjęcia pełne
            miłości.
          </p>
          <p>
            Jeśli jesteś na mojej stronie to pierwszy krok do spotkania ze mną
            :) Dzwoń, pisz - twórzmy razem piękne kadry!
          </p>
        </AboutDesc>
        <AboutPersonal>
          <AboutPhoto>
            <Image
              src="/portrait.jpg"
              height={500}
              width={500}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/portrait.jpg"
              loading="eager"
            ></Image>
          </AboutPhoto>
          <AboutDataContainer>
            <AboutData>photopassio.kielce@gmail.pl</AboutData>
            <AboutData>+48 793 014 475</AboutData>
          </AboutDataContainer>
          <AboutSocials>
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
          </AboutSocials>
          <AboutContact onClick={openModal}>Kontakt</AboutContact>
        </AboutPersonal>
      </AboutContainer>
    </>
  );
};

export default About;
