import { useNavigate } from "react-router-dom";
import { BaseProfile, PreviewImg } from "../../assets/index";
import { Silver } from "../../assets/rankIcons";
import styled from "styled-components";
import { Post } from "../../components/homePage";

const MyPost = () => {
  interface PostData {
    name: string;
    rank: string;
    profile: string;
    title: string;
    heartCnt: number;
    commentCnt: number;
    preview?: string | undefined;
  }
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
  ];
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TotalPostCnt>
        전체 글 <strong>{postData.length}</strong>
      </TotalPostCnt>
      {postData.length !== 0 ? (
        <PostBox>
          <Post posts={postData} />
        </PostBox>
      ) : (
        <TotalPost>
          <TextBox>
            <Alert>아직 작성하신 글이 없어요</Alert>
            <Advice>함께 지식을 공유 해보세요!</Advice>
          </TextBox>
          <WriteBtn onClick={() => navigate("/writePage")}>글쓰기</WriteBtn>
        </TotalPost>
      )}
    </Wrapper>
  );
};

export default MyPost;

const PostBox = styled.div`
  width: 100%;
  padding: 0px 42px;
`;

const TextBox = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const WriteBtn = styled.button`
  color: #ffffff;
  background-color: #000000;
  padding: 25px 110px;
  border-radius: 100px;
  font-size: 24px;
  cursor: pointer;
`;

const Alert = styled.span`
  font-size: 32px;
`;

const Advice = styled.span`
  font-size: 24px;
  color: #707583;
  text-align: center;
`;

const TotalPost = styled.div`
  gap: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  white-space: nowrap;
  padding: 0px 447px;
`;

const TotalPostCnt = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 29px 0px 10px 24px;
  border-bottom: 1px solid #707583;
  & > strong {
    color: #ff0000;
  }
`;

const Wrapper = styled.div`
  border: 1px solid #707583;
  border-radius: 15px;
  height: 689px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
