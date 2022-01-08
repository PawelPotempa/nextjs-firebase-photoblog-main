import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "../styles/sidebarElements";
import { Modal } from "./Modal";
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }) => {
  // Toggle modal
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link href="about" passHref onClick={toggle}>
            <SidebarLink onClick={toggle}>O MNIE</SidebarLink>
          </Link>
          <Link href="blog" passHref onClick={toggle}>
            <SidebarLink onClick={toggle}>BLOG</SidebarLink>
          </Link>

          <Link href="services" passHref onClick={toggle}>
            <SidebarLink onClick={toggle}>OFERTA</SidebarLink>
          </Link>
          <Link href="pricing" passHref onClick={toggle}>
            <SidebarLink onClick={toggle}>CENNIK</SidebarLink>
          </Link>
          <Link href="faq" passHref onClick={toggle}>
            <SidebarLink onClick={toggle}>FAQ</SidebarLink>
          </Link>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={openModal}>Kontakt</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </SidebarContainer>
  );
};

export default Sidebar;
