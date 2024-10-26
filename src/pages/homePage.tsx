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
      <Field>
        <HeaderMenu />
        <PopularTab />
        <FilterTab />
        <Main>
          <Post />
          <LoginTab />
        </Main>
        <PageSwitch />
      </Field>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Home;

const Footer = styled.div`
  width: 100%;
  height: 160px;
  background-color: #e9e9e9;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
`;
