import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export const Container = styled.section`
  margin-top: 60px;
  padding: 0 60px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 390px) {
    padding: 0 40px;
  }
`;

export const Content = styled.h1`
  text-align: center;
  font-size: 2rem;
  @media screen and (max-width: 390px) {
    font-size: 1.3rem;
  }
`;
export const Data = styled.p`
  font-size: 1.5rem;

  @media screen and (max-width: 390px) {
    font-size: 1rem;
  }
`;
export const Socials = styled.div``;
export const SocialLink = styled.a``;
export const FB = styled(FaFacebookSquare)`
  font-size: 5rem;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 425px) {
    font-size: 3rem;
    margin: 5px;
  }
`;

export const IG = styled(FiInstagram)`
  font-size: 5rem;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 425px) {
    font-size: 3rem;
    margin: 5px;
  }
`;
