import React, { useState } from "react";
import { Modal } from "../components/Modal";
import Link from "next/link";

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
          <AboutPhoto src="/portrait.jpg" />
          <AboutDataContainer>
            <AboutData>adresmojejfirmy@gmail.com</AboutData>
            <AboutData>+48 123 456 789</AboutData>
          </AboutDataContainer>
          <AboutSocials>
            <a
              target="_blank"
              href="https://facebook.com/"
              rel="noopener noreferrer"
            >
              <AboutFB />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/"
              rel="noopener noreferrer"
            >
              <AboutIG />
            </a>
          </AboutSocials>
          <AboutContact onClick={openModal}>Kontakt</AboutContact>
        </AboutPersonal>
      </AboutContainer>
    </>
  );
};

export default About;
