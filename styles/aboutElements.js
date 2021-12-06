import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export const AboutContainer = styled.div`
  height: 100vh;
  padding: 60px;
  display: grid;
  align-self: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    transition: 0.8s all ease;
    /* margin: 80px 40px 40px 40px; */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    transition: 0.8s all ease;
    /* margin: 80px 20px 20px 20px; */
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    transition: 0.8s all ease;
    /* margin: 80px 20px 0px 20px; */
  }
`;
export const AboutDesc = styled.div`
  height: 100%;
  grid-column: 1/3;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const AboutPersonal = styled.div`
  padding: 5vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
`;
export const AboutPhoto = styled.img`
  /* padding: 2rem; */
  /* justify-content:  */
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
`;
export const AboutDataContainer = styled.div`
  text-align: center;
`;
export const AboutData = styled.p`
  padding: 5px;
`;
export const AboutSocials = styled.div``;
export const AboutFB = styled(FaFacebookSquare)`
  font-size: 3rem;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
export const AboutIG = styled(FiInstagram)`
  font-size: 3rem;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

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
`;
