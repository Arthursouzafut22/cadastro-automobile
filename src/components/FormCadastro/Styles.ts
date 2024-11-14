import styled from "styled-components";

export const Form = styled.form`
  h1 {
    margin: 0;
    text-align: center;
    color: #ffffff;
  }

  input[type="file"] {
    background-color: black;
    cursor: pointer;
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
    transform: scale(0.9);
  }
`;
