import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export const AboutContainer = styled.div`
  font-size: 0.8rem;
  margin-top: 60px;
  height: calc(100vh - 60px);
  padding: 60px;
  display: grid;
  align-self: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    padding: 40px;
    grid-template-columns: repeat(2, 1fr);
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;
export const AboutDesc = styled.div`
  height: 100%;
  grid-column: 1/3;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }

  @media screen and (max-width: 600px) {
  }
`;
export const AboutPersonal = styled.div`
  padding: 5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-row: 1;
    grid-column: 1/3;
  }
`;
export const AboutPhoto = styled.div`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 425px) {
    width: 140px;
    height: 140px;
  }
`;

export const AboutDataContainer = styled.div`
  text-align: center;
`;

export const AboutData = styled.p`
  padding: 5px;

  @media screen and (max-width: 425px) {
    padding: 0;
  }
`;

export const AboutSocials = styled.div`
  margin-bottom: 0.5rem;
`;

export const AboutFB = styled(FaFacebookSquare)`
  font-size: 3rem;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 425px) {
    font-size: 2rem;
    margin: 5px;
  }
`;
export const AboutIG = styled(FiInstagram)`
  font-size: 3rem;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 425px) {
    font-size: 2rem;
    margin: 5px;
  }
`;

export const AboutSocialLink = styled.a``;

export const AboutContact = styled.button`
  border-radius: 50px;
  background: #000;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    border-color: #000;
  }

  @media screen and (max-width: 425px) {
    padding: 8px 32px;
    color: #fff;
    font-size: 12px;
  }
`;
