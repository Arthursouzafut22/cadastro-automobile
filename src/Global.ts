import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const header = "header";
export const sidNav = "sidNav";
export const main = "main";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Poppins", sans-serif;
    background-color:#07080B;
    max-width: 100%;
}

a{
    display: block;
    text-decoration:none;
}

ul>li{
    padding: 0;
    list-style: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    "${sidNav} ${main} ${main}"
    "${sidNav} ${main} ${main}";
    height: 100vh; 
`;

export { GlobalStyle, Container };
