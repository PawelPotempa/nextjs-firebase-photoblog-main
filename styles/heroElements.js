import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0;
  height: calc(100vh);
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.3) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const ArrowLeft = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.5);
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const ArrowRight = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.5);
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const SlideActive = styled.div`
  opacity: 1;
  transition-duration: 1s;
`;

export const Slide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;
`;

export const HeroImage = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
