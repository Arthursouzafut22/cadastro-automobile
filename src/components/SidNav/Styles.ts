import styled from "styled-components";
import { sidNav } from "../../Global";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  grid-area: ${sidNav};
  background-color: #13161b;
  max-width: 250px;
  height: 100%;
  max-height: 100vh;
  border-right: 1px solid #323f4a;
  padding: 10px;

  button {
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #ffffff;
    background-color: #323f4a;
    cursor: pointer;
    padding: 10px 8px;
    border-radius: 8px;
    border: none;
  }
`;
