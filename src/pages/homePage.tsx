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
import { BaseProfile, PreviewImg } from "../assets";
import { useUser } from "../contexts/UserContext";

interface PostData {
  name: string;
  rank: string;
  profile: string;
  title: string;
  heartCnt: number;
  commentCnt: number;
  preview?: string | undefined;
  id: number;
}

const HomePage = () => {
  const { user } = useUser();
  
  const postData: PostData[] = [
    {
      name: "유재민",
      rank: Silver,
      profile: BaseProfile,
      title: "내가 17살 때 부터 백엔드를 할 수 있었던 이유 17가지",
      heartCnt: 3,
      commentCnt: 3,
      preview: PreviewImg,
      id: 1,
    },
    {
      name: "정승우",
      rank: Bronze,
      profile: BaseProfile,
      title: "내가 프론트인 이유",
      heartCnt: 10,
      commentCnt: 10,
      id: 2,
    },
    {
      name: "홍길동",
      rank: Diamond,
      profile: BaseProfile,
      title: "내가 1살 때 부터 의적 일을 할 수 있었던 이유 199가지",
      heartCnt: 300,
      commentCnt: 3923,
      id: 3,
    },
    {
      name: "홍길동",
      rank: Diamond,
      profile: BaseProfile,
      title: "내가 1살 때 부터 의적 일을 할 수 있었던 이유 199가지",
      heartCnt: 300,
      commentCnt: 3923,
      id: 4,
    },
    {
      name: "홍길동",
      rank: Diamond,
      profile: BaseProfile,
      title: "내가 1살 때 부터 의적 일을 할 수 있었던 이유 199가지",
      heartCnt: 300,
      commentCnt: 3923,
      id: 5,
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
          {user && <LoginTab user={user} />}
        </Main>
      </Field>
      <Footer>
        <PageSwitch />
        <FooterDiv></FooterDiv>
      </Footer>
    </Wrapper>
  );
};

export default HomePage;

export const FooterDiv = styled.div`
  background-color: #e9e9e9;
  width: 100%;
  height: 160px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
