import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <GlobalStyles />
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
