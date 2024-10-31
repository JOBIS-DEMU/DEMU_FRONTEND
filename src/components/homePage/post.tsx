import { Comment, Heart } from "../../assets";
import styled from "styled-components";

<<<<<<< HEAD
const Post = () => {
  const postData = [
    {
      name: "유재민",
      rank: Silver,
      profile: BaseProfile,
      title: "ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ",
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
      preview: PreviewImg,
    },
    {
      name: "홍길동",
      rank: Diamond,
      profile: BaseProfile,
      title: "내가 1살 때 부터 의적 일을 할 수 있었던 이유 199가지",
      heartCnt: 300,
      commentCnt: 3923,
      preview: PreviewImg,
    },
  ];
=======
interface PostProps {
  name: string;
  rank: string;
  profile: string;
  title: string;
  heartCnt: number;
  commentCnt: number;
  preview?: string | undefined;
}

interface PostListProps {
  posts: PostProps[];
}

const Post = ({ posts }: PostListProps) => {
>>>>>>> main
  return (
    <Wrapper>
      {posts.map((post, index) => (
        <ContextBox key={index}>
          <PostBox>
            <NameBox>
              <Profile src={post.profile} />
              <Filed>
                <Name>{post.name}</Name>
                <Rank src={post.rank} />
              </Filed>
            </NameBox>
            <TitleBox>
              <Title>{post.title}</Title>
              <IconBox>
                <img src={Heart} />
                {post.heartCnt}
                <img src={Comment} />
                {post.commentCnt}
              </IconBox>
            </TitleBox>
          </PostBox>
          {post.preview ? <Preview src={post.preview} /> : null}
        </ContextBox>
      ))}
    </Wrapper>
  );
};

export default Post;

const ContextBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #707583;
  padding-top: 6px;
  padding-bottom: 20px;
  cursor: pointer;
  gap: 67px;
`;
const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
`;

const Preview = styled.img`
  width: 198px;
  height: 198px;
  border-radius: 15px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 21px;
  color: #707583;
  gap: 8px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 150px;
`;

const Profile = styled.img`
  width: 66px;
  height: 66px;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
  @media (min-height: 32px) {
    margin-top: 20px;
  }
`;

const Rank = styled.img`
  width: 32px;
  height: 34px;
`;

const Filed = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
`;
const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 32px;
  font-weight: 600;
`;
