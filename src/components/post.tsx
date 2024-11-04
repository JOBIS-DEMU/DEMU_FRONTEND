import { useLocation, useNavigate } from "react-router-dom";
import { Comment, Heart } from "../assets/index";
import styled from "styled-components";
import { useEffect, useState } from "react";

interface PostProps {
  name: string;
  rank: string;
  profile: string;
  title: string;
  heartCnt: number;
  commentCnt: number;
  preview?: string | undefined;
  id: number;
}

interface PostListProps {
  posts: PostProps[];
}

const Post = ({ posts }: PostListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  useEffect(() => {
    const term = localStorage.getItem("searchValue");
    if (term) {
      setSearchTerm(term);
    }
  }, []);

  const searchFilter = posts.filter((post) => post.title.includes(searchTerm));

  const filteredPosts =
    location.pathname === "/searchPage" ? searchFilter : posts;

  return (
    <Wrapper>
      {filteredPosts.map((post, index) => (
        <ContextBox
          key={index}
          onClick={() => navigate(`/detailPostPage/${post.id}`)}
        >
          <PostBox>
            <NameBox>
              <Profile src={post.profile} alt={`${post.name}의 프로필`} />
              <Field>
                <Name>{post.name}</Name>
                <Rank src={post.rank} alt="랭크 아이콘" />
              </Field>
            </NameBox>
            <TitleBox>
              <Title>{post.title}</Title>
              <IconBox>
                <img src={Heart} alt="하트 아이콘" />
                {post.heartCnt}
                <img src={Comment} alt="댓글 아이콘" />
                {post.commentCnt}
              </IconBox>
            </TitleBox>
          </PostBox>
          {post.preview && <Preview src={post.preview} alt="미리보기 이미지" />}
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

const Field = styled.div`
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
