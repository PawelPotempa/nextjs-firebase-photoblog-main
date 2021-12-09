import styled from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi";

export const PageWrap = styled.div`
  margin-top: 60px;
  padding-bottom: 60px;
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const FAQIntroduction = styled.p`
  font-size: 2rem;
  width: 90%;
  padding-bottom: 100px;
`;

export const FAQWrap = styled.div`
  background: white;
  color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  width: 90%;
  cursor: pointer;
  font-family: "Arial", monospace;
  font-weight: normal;
  border-bottom: solid 2px rgba(230, 230, 230, 1);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  h1 {
    padding: 1.5%;
    font-size: 1.5rem;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const FAQDropdown = styled.div`
  width: 80%;
  border-left: solid 3px rgba(19, 153, 200, 1);
  margin: 1rem;
  padding: 0.5rem;
  font-weight: normal;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const FAQMinus = styled(FiMinus)`
  color: rgba(19, 153, 200, 1);
`;

export const FAQPlus = styled(FiPlus)`
  color: rgba(19, 153, 200, 1);
`;
