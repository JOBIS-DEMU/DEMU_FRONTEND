import { BaseProfile, PreviewImg } from "../assets";
import { Bronze, Diamond, Silver } from "../assets/rankIcons";
import {
  FilterTab,
  HeaderMenu,
  LoginTab,
  PageSwitch,
  PopularTab,
  Post,
} from "../components/homePage";
import styled from "styled-components";

interface PostData {
  name: string;
  rank: string;
  profile: string;
  title: string;
  heartCnt: number;
  commentCnt: number;
  preview?: string | undefined;
}

const HomePage = () => {
  const postData: PostData[] = [
    {
      name: "유재민",
      rank: Silver,
      profile: BaseProfile,
      title: "내가 17살 때 부터 백엔드를 할 수 있었던 이유 17가지",
      heartCnt: 3,
      commentCnt: 3,
      preview: PreviewImg,
    },
    {
      name: "정승우",
      rank: Bronze,
      profile: BaseProfile,
      title: "내가 프론트인 이유",
      heartCnt: 10,
      commentCnt: 10,
    },
    {
      name: "홍길동",
      rank: Diamond,
      profile: BaseProfile,
      title: "내가 1살 때 부터 의적 일을 할 수 있었던 이유 199가지",
      heartCnt: 300,
      commentCnt: 3923,
    },
    {
      name: "홍길동",
      rank: Diamond,
      profile: BaseProfile,
      title: "내가 1살 때 부터 의적 일을 할 수 있었던 이유 199가지",
      heartCnt: 300,
      commentCnt: 3923,
    },
    {
      name: "홍길동",
      rank: Diamond,
      profile: BaseProfile,
      title: "내가 1살 때 부터 의적 일을 할 수 있었던 이유 199가지",
      heartCnt: 300,
      commentCnt: 3923,
    },
  ];
  return (
    <Wrapper>
      <Field>
        <HeaderMenu />
        <PopularTab />
        <FilterTab />
        <Main>
          <Post posts={postData} />
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

export const Footer = styled.footer`
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
  padding-left: 142px;
`;
