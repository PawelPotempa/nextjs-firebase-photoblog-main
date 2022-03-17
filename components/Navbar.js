import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Modal } from "./Modal";
import {
  Nav,
  NavbarContainer,
  NavLogoContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ContactBtn,
} from "../styles/navbarElements";
import Link from "next/link";

const Navbar = ({ toggle }) => {
  // Toggle modal
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <Link href="/about" passHref scroll={false}>
                  <NavLinks>O MNIE</NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/blog" passHref scroll={false}>
                  <NavLinks>BLOG</NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/services" passHref scroll={false}>
                  <NavLinks>OFERTA</NavLinks>
                </Link>
              </NavItem>
            </NavMenu>
            <Link href="/" passHref scroll={false}>
              <NavLogoContainer>
                <NavLogo src="/logo.svg" />
              </NavLogoContainer>
            </Link>
            <NavMenu>
              <NavItem>
                <Link href="/pricing" passHref scroll={false}>
                  <NavLinks>CENNIK</NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/faq" passHref scroll={false}>
                  <NavLinks>FAQ</NavLinks>
                </Link>
              </NavItem>
              <ContactBtn onClick={openModal}>Kontakt</ContactBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
