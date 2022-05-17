import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  h1,
  h2 {
    font-family: 'Roboto', sans-serif;

  }
`;
