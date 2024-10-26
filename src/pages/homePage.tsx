import { BaseProfile } from "../assets";
import { Diamond } from "../assets/rankIcons";
import {
  FilterTab,
  HeaderMenu,
  LoginTab,
  PageSwitch,
  PopularTab,
  Post,
} from "../components/homePage";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper>
      <Field>
        <HeaderMenu />
        <PopularTab />
        <FilterTab />
        <Main>
          <Post />
          <LoginTab
            name="정승우"
            major="frontend"
            info="살려주세요"
            rank={Diamond}
            profile={BaseProfile}
          />
        </Main>
        <PageSwitch />
      </Field>
      <Footer></Footer>
    </Wrapper>
  );
};

export default HomePage;

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
