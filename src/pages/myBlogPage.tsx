import { HeaderMenu, PageSwitch, Post } from "../components/homePage";
import styled from "styled-components";
import { Footer } from "./homePage";
import { Bronze, Silver } from "../assets/rankIcons";
import { BaseProfile, PreviewImg } from "../assets";
interface PostData {
  name: string;
  rank: string;
  profile: string;
  title: string;
  heartCnt: number;
  commentCnt: number;
  preview?: string | undefined;
}

const MyBlogPage = () => {
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
  ];
  return (
    <Wrapper>
      <HeaderMenu />
      <Field>
        <PostBox>
          <Post posts={postData} />
        </PostBox>
        <PageSwitch />
      </Field>
      <Footer></Footer>
    </Wrapper>
  );
};

export default MyBlogPage;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  margin-left: 140px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
