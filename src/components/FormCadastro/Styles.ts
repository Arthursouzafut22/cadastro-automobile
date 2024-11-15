import styled from "styled-components";

export const Form = styled.form`
  h1 {
    margin: 0;
    text-align: center;
    color: #ffffff;
  }

  background-color: #13161b;
  max-width: 100%;
  width: 500px;
  padding: 35px 35px 40px 35px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #323f4a;
  border-radius: 8px;

  p{
    color:red;
    font-size:14px;
    margin:0;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  color: #ffdf00;
  background-color: #3a391d;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FileInputWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin: 15px 0px;
`;

export const HiddenFileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const CustomButton = styled.label`
  padding: 8px 20px;
  background-color: #323f4a;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #43515e;
  }
`;
