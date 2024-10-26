import {
  FilterTab,
  HeaderMenu,
  LoginTab,
  PageSwitch,
  PopularTab,
  Post,
} from "../components/homePage";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <PopularTab />
      <FilterTab />
      <Main>
        <Post />
        <LoginTab />
      </Main>
      <PageSwitch />
    </Wrapper>
  );
};

export default Home;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
`;

const Main = styled.div`
  display: flex;
`;
