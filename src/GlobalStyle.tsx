import { createGlobalStyle } from 'styled-components';
import retro from './Assets/Font/PFStardust.woff';
import retro2 from './Assets/Font/neodgm.woff2';

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

  @font-face {
    font-family: 'retro';    
    src: url(${retro}) format('truetype'); 
  }

  @font-face {
    font-family: 'retro2';    
    src: url(${retro2}) format('truetype'); 
  }

  span{
    font-family: 'retro2';
  }
`;

export default GlobalStyles;
