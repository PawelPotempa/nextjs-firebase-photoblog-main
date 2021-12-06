import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: row;
  grid-gap: 2rem;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  padding: 60px 120px 0 120px;
`;

export const Tab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-self: center;
  height: 25vh;
  width: 25vw;
  border: 0px solid #000;
  /* background: rgba(128, 128, 128, 0.075); */
  cursor: pointer;
  /* box-sizing: content-box; */

  ${({ active }) =>
    active &&
    `
    background: white;
  `}
`;

// export const Content = styled.div`
//   background: red;
//   height: 100%;
//   display: none;

//   ${({ active }) =>
//     active &&
//     `
//     display: block;
//   }
//   `}
// `;

export const ThumbnailWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ThumbnailDesc = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;

  ${ThumbnailWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const Text = styled.p`
  padding: 20px;
  font-size: 1.5em;
  color: rgba(255, 255, 255, 0.9);
`;

export const ThumbnailLabel = styled.h1`
  font-size: 1.3rem;
`;
export const ThumbnailScope = styled.h2`
  font-size: 0.8rem;
`;
