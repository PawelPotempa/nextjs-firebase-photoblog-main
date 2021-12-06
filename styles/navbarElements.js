import styled from "styled-components";
// import Link from "next/link";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? "black" : "hsla(360, 0%, 100%, 0.7)"};
  height: 60px;
  width: 100%;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  z-index: 1;
  width: 90%;
  padding: 0px 20px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding: 0px;
  }
`;

export const NavLogoContainer = styled.a`
  cursor: pointer;
  /* display: flex;
  align-items: center; */
`;

export const NavLogo = styled.img`
  width: 150px;
  height: 60px;
  justify-content: flex-start;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -5px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLinks = styled.a`
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: box-shadow 0.33s ease-out;

  &.active {
    box-shadow: 0 8px 0 -4px rgba(19, 153, 200, 1);
  }
`;

export const ContactBtn = styled.button`
  width: 5rem;
  height: 2.2rem;
  padding: 4px 8px;
  font-size: 1rem;
  border-radius: 2rem;
  background: #000;
  white-space: nowrap;
  color: #fff;
  font-weight: 500;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    border-color: #000;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 1em;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
