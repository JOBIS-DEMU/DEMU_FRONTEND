import { useLocation, useNavigate } from "react-router-dom";
import { BaseProfile, PreviewImg } from "../../assets";
import styled from "styled-components";
import { useState } from "react";

const PopularTab = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const popularPost = [PreviewImg, PreviewImg];
  const [myBlog, setMyBlog] = useState(false);

  return (
    <Wrapper>
      <Title>대뮤니티, 이 달의 인기글🔥</Title>
      <Option>
        <OptionBox>
          <Selection
            onClick={() => {
              navigate("/home");
              setMyBlog(false);
            }}
            color={
              pathname === "/home" && myBlog === false ? "#1B69FF" : "#707583"
            }
          >
            홈
          </Selection>
          <Selection
            onClick={() => setMyBlog(!myBlog)}
            color={myBlog ? "#1B69FF" : "#707583"}
          >
            내 전공 블로그 보기
          </Selection>
        </OptionBox>
        <Selection onClick={() => navigate("/writePage")} color="#707583">
          글쓰기
        </Selection>
      </Option>
      <Ranking>
        {popularPost.map((post, index) => (
          <Candidate key={index} image={post}>
            <NameBox>
              <Profile src={BaseProfile} />
              <NickName>유재민</NickName>
            </NameBox>
          </Candidate>
        ))}
      </Ranking>
    </Wrapper>
  );
};
export default PopularTab;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: 24px;
  margin-bottom: 30px;
`;

const Profile = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 1000px;
  border: 1px solid #e9e9e9;
`;

const NickName = styled.span`
  font-size: 32px;
  font-weight: 800;
  line-height: 38px;
`;

const Candidate = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  width: 865px;
  height: 346px;
  opacity: 0.7;
  border-radius: 13px;
  background-size: cover;
  box-shadow: 0px 9.69px 9.69px 0px #00000040;
  cursor: pointer;
  display: flex;
  align-items: end;
`;

const Ranking = styled.div`
  border: 1px solid #bec7e1;
  background-color: #e9e9e9;
  padding: 58px 50px;
  display: flex;
  gap: 90px;
`;

const OptionBox = styled.div`
  display: flex;
  gap: 23px;
`;

const Selection = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
  margin-left: 142px;
`;

const Option = styled.div`
  display: flex;
  gap: 1148px;
  padding-left: 240px;
`;
