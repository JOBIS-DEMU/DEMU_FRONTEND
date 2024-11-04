import { HeaderMenu } from "../components/homePage";
import styled from "styled-components";
import { Footer, FooterDiv } from "./homePage";
import {
  BaseProfile,
  Comment,
  CommentSend,
  Heart,
  PreviewImg,
  SetPost,
} from "../assets";
import { Gold } from "../assets/rankIcons";

const DetailPostPage = () => {
  const detail = {
    title: "프론트 잘하는 방법",
    content:
      "프론트는 딸깍 딸깍 이렇게 저렇게 해서 공부하고 실무하고 갠프 하고 팀프하고 디자인 하고 여러가지 하다보면 어느세 뚝딱되어있다.프론트는 딸깍 딸깍 이렇게 저렇게 해서 공부하고 실무하고 갠프 하고 팀프하고 디자인 하고 여러가지 하다보면 어느세 뚝딱되어있다.프론트는 딸깍 딸깍 이렇게 저렇게 해서 공부하고 실무하고 갠프 하고 팀프하고 디자인 하고 여러가지 하다보면 어느세 뚝딱되어있다.프론트는 딸깍 딸깍 이렇게 저렇게 해서 공부하고 실무하고 갠프 하고 팀프하고 디자인 하고 여러가지 하다보면 어느세 뚝딱되어있다.프론트는 딸깍 딸깍 이렇게 저렇게 해서 공부하고 실무하고 갠프 하고 팀프하고 디자인 하고 여러가지 하다보면 어느세 뚝딱되어있다.프론트는 딸깍 딸깍 이렇게 저렇게 해서 공부하고 실무하고 갠프 하고 팀프하고 디자인 하고 여러가지 하다보면 어느세 뚝딱되어있다.프론트는 딸깍 딸깍 이렇게 저렇게 해서 공부하고 실무하고 갠프 하고 팀프하고 디자인 하고 여러가지 하다보면 어느세 뚝딱되어있다.",
    name: "유재민",
    rank: Gold,
    image: PreviewImg,
    HeartCnt: 3,
    CommentCnt: 5,
  };
  return (
    <Wrapper>
      <HeaderMenu />
      <PostHeader>
        <UserBox>
          <img src={BaseProfile} />
          <UserName>{detail.name}</UserName>
          <Rank src={detail.rank} />
        </UserBox>
        <SetPostImg src={SetPost} />
      </PostHeader>
      <MainBox>
        <ContentImg src={detail.image} />
        <ContentBox>
          <Title>{detail.title}</Title>
          <Content>{detail.content}</Content>
        </ContentBox>
        <BottomBox>
          <InputBox>
            <CommentInput placeholder="(300자 이하) 칭찬하는 댓글을 달아주세요!" />
            <SendImg src={CommentSend} />
          </InputBox>
          <IconBox>
            <HeartIcon src={Heart} />
            <Cnt>{detail.HeartCnt}</Cnt>
            <CommentIcon src={Comment} />
            <Cnt>{detail.CommentCnt}</Cnt>
          </IconBox>
        </BottomBox>
      </MainBox>
      <Footer>
        <FooterDiv></FooterDiv>
      </Footer>
    </Wrapper>
  );
};

export default DetailPostPage;

const Cnt = styled.span`
  font-size: 30px;
  color: #707583;
`;

const HeartIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const CommentIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
`;
const IconBox = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 50px;
`;

const SendImg = styled.img`
  cursor: pointer;
`;

const CommentInput = styled.input`
  font-size: 23px;
  width: 600px;
  border: none;
  outline: none;
  &::placeholder {
    color: #98a4af;
  }
`;

const InputBox = styled.div`
  width: 1159px;
  height: 64px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0px 34px 0px 40px;
  border: 1px solid #707583;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #ffffff;
`;

const Content = styled.div`
  width: 1160px;
  padding: 0px 46px 104px 86px;
  font-size: 24px;
  line-height: 29px;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
  padding-left: 86px;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 12px;
`;

const ContentImg = styled.img`
  width: 1168px;
  height: 412px;
  object-fit: cover;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const SetPostImg = styled.img`
  cursor: pointer;
`;

const Rank = styled.img`
  width: 24px;
  height: 26px;
`;

const UserName = styled.span`
  font-size: 26px;
  white-space: nowrap;
`;

const UserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const PostHeader = styled.div`
  background-color: #ffffff;
  padding: 38px 24px;
  display: flex;
  gap: 933px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;
