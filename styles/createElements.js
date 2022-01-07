import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const InputLabel = styled.label`
  padding-right: 1rem;
`;

export const InputWindow = styled.input`
  width: 100%;
  height: 1.5rem;
  padding: 16px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
`;

export const FileInputWrapper = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const FileInputWindow = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const FileInputLabel = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  padding: 10px 12px;
  background-color: #000;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border: none;
`;

export const TextareaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextareaWindow = styled.textarea`
  width: 100%;
  height: 10rem;
`;

export const SubmitBtn = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  padding: 10px 12px;
  margin-top: 1rem;
  background-color: #000;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border: none;
`;

export const PreviewImage = styled.img`
  margin-top: 2rem;
  width: clamp(280px, 80vw, 500px);
  height: clamp(140px, 80vh, 300px);
  object-fit: cover;
`;
