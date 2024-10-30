import { HeaderMenu, PageSwitch, Post } from "../components/homePage";
import styled from "styled-components";
import { Footer } from "./homePage";

const MyBlogPage = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <Field>
        <PostBox>
          <Post />
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
  width: 100%;
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
