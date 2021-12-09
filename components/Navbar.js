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
  NavBtnLink,
} from "../styles/navbarElements";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
// import Logo from "../../images/logo.svg";

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
                <Link href="/about" passHref>
                  <NavLinks>O MNIE</NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/blog" passHref>
                  <NavLinks>BLOG</NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/services" passHref>
                  <NavLinks>OFERTA</NavLinks>
                </Link>
              </NavItem>
            </NavMenu>
            <Link href="/" passHref>
              <NavLogoContainer>
                <NavLogo src="/logo.jpg" />
              </NavLogoContainer>
            </Link>
            <NavMenu>
              <NavItem>
                <Link href="/cennik" passHref>
                  <NavLinks>CENNIK</NavLinks>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/faq" passHref>
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
