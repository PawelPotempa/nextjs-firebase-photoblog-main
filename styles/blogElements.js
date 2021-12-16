import styled from "styled-components";
import { FaTrashAlt, FaPen, FaPlus } from "react-icons/fa";

export const Main = styled.body`
  height: 100%
  width: 100vw;
  position: relative;
`;

export const Wrapper = styled.div`
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 80px 60px 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
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
export const Post = styled.div`
  padding: 0 5px 25px 5px;
  position: relative;
  max-height: 27.5vh;
  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Delete = styled(FaTrashAlt)`
  margin: 10px;
  position: absolute;
  right: 3%;
  top: 15%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Edit = styled(FaPen)`
  margin: 10px;
  position: absolute;
  right: 3%;
  top: 5%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  text-align: center;
`;

export const PaginationContainer = styled.div`
  .pagWrapper {
    /* position: fixed; */
    width: 100vw;
    list-style: none;
    align-content: center;
    justify-content: center;
    color: transparent;
  }

  .pagWrapper a {
    height: 25px;
    width: 25px;
  }

  .pagWrapper a:hover {
    border-color: red;
  }

  .pagActive a {
    background-color: #2b2eff;
  }

  .prevBtn {
    position: absolute;
    font-size: 3rem;
    z-index: 10;
    user-select: none;
    top: 45%;
    left: 30px;
  }

  .prevBtn a {
    height: 40px;
    width: 40px;
    border: solid black;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
  }

  .nextBtn {
    position: absolute;
    font-size: 3rem;
    z-index: 10;
    user-select: none;
    top: 45vh;
    right: 30px;
  }

  .nextBtn a {
    height: 40px;
    width: 40px;
    border: solid black;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
  }

  .pagBtn a {
    height: 25px;
    width: 25px;
    margin: 5px;
    background-color: hsla(123, 0%, 80%, 0.5);
    border-radius: 50%;
    display: inline-block;
    display: none;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .pagBtn a:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .pagActive a {
    background-color: hsla(123, 0%, 80%, 1);
  }

  .pagDisabled a {
    border-color: #bbb;
  }
`;

export const AddPostIcon = styled(FaPlus)`
  margin-top: 22px;
  z-index: 999;
`;

export const AddPost = styled.a`
  cursor: pointer;
  position: absolute;
  bottom: 2vh;
  right: 1rem;
  width: 60px;
  height: 60px;
  background-color: #000;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
`;
