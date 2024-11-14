import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Poppins", sans-serif;
    background-color:#07080B;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 25px;

}

a{
    display: block;
    text-decoration:none;
}

ul>li{
    padding: 0;
    list-style: none;
}

`;
