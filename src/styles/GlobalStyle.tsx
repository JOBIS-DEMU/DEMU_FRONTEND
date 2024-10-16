import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing:border-box;
  }
  body{
    background-color:#F9FAFB;
    font-family: 'Inter', sans-serif;

  }
`;

export default GlobalStyles;
