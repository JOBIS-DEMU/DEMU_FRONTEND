import styled from "styled-components";
import MainRouter from "./routes/mainRouter";
import GlobalStyles from "./styles/GlobalStyle";
import { UserProvider } from "./contexts/UserContext";

const App = (): JSX.Element => {
  return (
    <UserProvider>
      <Wrapper>
        <GlobalStyles />
        <MainRouter />
      </Wrapper>
    </UserProvider>
  );
};

export default App;

const Wrapper = styled.div``;
