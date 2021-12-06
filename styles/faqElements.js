import styled from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi";

export const PageWrap = styled.div`
  margin-top: 60px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FAQWrap = styled.div`
  background: white;
  color: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  width: 40%;
  cursor: pointer;
  font-family: "Arial", monospace;
  font-weight: normal;
  /* box-shadow: 0 5px 16px rgba(0, 0, 0, 0.15); */
  border-bottom: solid 2px rgba(230, 230, 230, 1);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  h1 {
    padding: 1.5%;
    font-size: 1.5rem;
  }
`;

export const FAQDropdown = styled.div`
  width: 30%;
  border-left: solid 3px rgba(19, 153, 200, 1);
  margin: 1rem;
  padding: 0.5rem;
  font-weight: normal;
  font-size: 1rem;
`;

export const FAQMinus = styled(FiMinus)`
  color: rgba(19, 153, 200, 1);
`;

export const FAQPlus = styled(FiPlus)`
  color: rgba(19, 153, 200, 1);
`;
