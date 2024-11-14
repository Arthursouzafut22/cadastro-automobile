import styled from "styled-components";

export const Input = styled.input`
  font-size: 17px;
  display: block;
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #0f1117;
  border: 1px solid #323f4a;
  outline: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  &:focus {
    outline-color: #ffdf00;
  }

  &:active {
    transform: scale(0.95);
  }
`;
