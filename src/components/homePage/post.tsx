import { useLocation } from "react-router-dom";
import { Comment, Heart } from "../../assets/index";
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
}

interface PostListProps {
  posts: PostProps[];
}

const Post = ({ posts }: PostListProps) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  useEffect(() => {
    const term = localStorage.getItem("searchValue");
    if (term) {
      setSearchTerm(term);
    }
  }, []);

  const searchFilter = posts.filter((post) => post.title.includes(searchTerm));

  return (
    <Wrapper>
      {location.pathname === "/searchPage"
        ? searchFilter.map((post, index) => (
            <ContextBox key={index}>
              <PostBox>
                <NameBox>
                  <Profile src={post.profile} />
                  <Field>
                    <Name>{post.name}</Name>
                    <Rank src={post.rank} />
                  </Field>
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
          ))
        : posts.map((post, index) => (
            <ContextBox key={index}>
              <PostBox>
                <NameBox>
                  <Profile src={post.profile} />
                  <Field>
                    <Name>{post.name}</Name>
                    <Rank src={post.rank} />
                  </Field>
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
