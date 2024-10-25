import { HeaderMenu, MainTab, PopularTab } from "../components/homePage";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <PopularTab />
      <MainTab />
    </Wrapper>
  );
};

export default Home;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
`;
