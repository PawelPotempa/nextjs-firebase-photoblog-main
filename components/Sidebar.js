import React from "react";
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
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <Link href="about" passHref onClick={toggle}>
            <SidebarLink>O MNIE</SidebarLink>
          </Link>
          <Link href="blog" passHref onClick={toggle}>
            <SidebarLink>BLOG</SidebarLink>
          </Link>

          <Link href="services" passHref onClick={toggle}>
            <SidebarLink>OFERTA</SidebarLink>
          </Link>
          <Link href="price" passHref onClick={toggle}>
            <SidebarLink>CENNIK</SidebarLink>
          </Link>
          <Link href="faq" passHref onClick={toggle}>
            <SidebarLink>FAQ</SidebarLink>
          </Link>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Kontakt</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
