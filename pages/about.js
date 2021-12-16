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
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AboutDesc>
        <AboutPersonal>
          <AboutPhoto>
            <Image
              src="/portrait.webp"
              height={500}
              width={500}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/portrait.webp"
              loading="eager"
            ></Image>
          </AboutPhoto>
          <AboutDataContainer>
            <AboutData>photopassio.kielce@gmail.pl</AboutData>
            <AboutData>+48 123 456 789</AboutData>
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
