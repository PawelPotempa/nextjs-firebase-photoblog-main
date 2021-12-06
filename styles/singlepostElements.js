import styled from "styled-components";

export const SPContainer = styled.div`
  margin-top: 80px;
  display: grid;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
export const SPDesc = styled.div`
  background-color: red;
`;
export const SPDate = styled.div``;
export const SPGallery = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
  grid-gap: 10px;
  object-fit: cover;
  transition: all 0.5s ease;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 150px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-auto-rows: 250px;
  }
`;

export const SPGalleryItem = styled.div`
  background-color: #d7d7d8;
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;

  :nth-child(4n + 1) {
    grid-column: span 1;
    grid-row: span 2;
  }

  :nth-child(7n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media screen and (max-width: 480px) {
    :nth-child(4n + 1) {
      grid-column: span 1;
      grid-row: span 1;
    }
    :nth-child(7n + 1) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
`;

export const SPPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const BigImg = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.4s ease, visibility 0.4s ease,
    transform 0.5s ease-in-out;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  overflow: hidden;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  animation-duration: 0.4s;
  animation-delay: 0.5s;

  svg {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 5rem;
    height: 5rem;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    cursor: pointer;
  }

  ${({ bigImg }) =>
    bigImg &&
    `
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  `};
`;

export const TempImg = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  padding: 20px 0 20px;
  margin: 0 auto;
`;
