import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* reset styles */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /* set base font size and line height */
    font-size: 62.5%; /* 1rem = 10px */
    line-height: 1.5;
  }

  body {
    /* remove default margin and set box-sizing to border-box */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: #2c8c8c;
  }
`;

export default GlobalStyles;
