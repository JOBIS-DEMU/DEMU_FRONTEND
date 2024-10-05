import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    font-family: 'Inter', sans-serif;
    box-sizing:border-box;
  }
  body{
    background-color:#F9FAFB;

  }
`;

export default GlobalStyles;
