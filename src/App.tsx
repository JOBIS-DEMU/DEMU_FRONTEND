import React from "react";
import styled from "styled-components";

import MainRouter from "./routes/mainRouter";
import GlobalStyles from "./styles/GlobalStyle";

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
