import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
  }

  .app{
    width: 100%;
    height: 100%;
  }

  .app__body{
    display:flex;
    background-color: lightgray;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 2em;
  }
`