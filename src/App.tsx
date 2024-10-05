import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainRouter from "./routes/mainRouter";

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <GlobalStyles />
      <MainRouter />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div``;
const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    font-family: 'Inter', sans-serif;
  }
`;
