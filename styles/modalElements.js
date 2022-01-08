import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalWrapper = styled(motion.div)`
  width: 800px;
  height: 50vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  align-content: center;

  @media screen and (max-width: 1024px) {
    width: 600px;
  }

  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 80vh;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media screen and (max-width: 460px) {
    height: 90vh;
    width: 90vw;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: rgb(255, 245, 145);
    background: linear-gradient(
      90deg,
      rgba(255, 245, 145, 1) 0%,
      rgba(200, 156, 19, 1) 100%
    );
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* padding: 25px; */
  background: rgba(230, 230, 230, 1);
  border-radius: 0 10px 10px 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    border-radius: 0 0 10px 10px;
    flex-direction: row;
  }

  @media screen and (max-width: 460px) {
    height: 45vh;
  }
`;

export const Map = styled.iframe`
  height: 50%;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AboutSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  /* margin-bottom: 0.5rem; */
`;

export const AboutData = styled.p`
  /* padding: 5px; */
  text-align: center;
  margin: 5px;

  :nth-of-type(1) {
    font-weight: bold;
  }

  @media screen and (max-width: 425px) {
    font-size: 1.3rem;
  }
`;

export const LinksContainer = styled.div``;

export const AboutFB = styled(FaFacebookSquare)`
  font-size: 3rem;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 425px) {
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
    margin: 5px;
  }
`;

export const AboutSocialLink = styled.a``;

export const Left = styled.div`
  text-align: center;
  padding: 25px;
  background: #fff;
  border-radius: 10px 0 0 10px;

  h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      height: 4px;
      width: 50px;
      border-radius: 2px;
      background-color: rgba(19, 153, 200, 1);
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 10px 10px 0 0;
  }

  @media screen and (max-width: 460px) {
    padding: 20px;
  }
`;

export const LeftInput = styled.input`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font-family: "Arial", monospace;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border: 2px solid rgba(30, 85, 250, 0.47);
    background-color: #fff;
  }

  @media screen and (max-width: 460px) {
    max-height: 8%;
    padding: 0.3rem;
    margin-bottom: 22px;
  }
`;

export const LeftTextarea = styled.textarea`
  min-height: 60px;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
  resize: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font-family: "Arial", monospace;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border: 2px solid rgba(30, 85, 250, 0.47);
    background-color: #fff;
  }

  @media screen and (max-width: 460px) {
    max-height: 8%;
    padding: 0.3rem;
    margin-bottom: 11px;
  }
`;

export const LeftBtn = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background: rgb(145, 219, 255);
  background: linear-gradient(
    90deg,
    rgba(145, 219, 255, 1) 0%,
    rgba(19, 153, 200, 1) 100%
  );
  color: #fff;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #27ae60;
  }
`;
