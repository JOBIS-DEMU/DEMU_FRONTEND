import UserModel from "../../models/user";
import { getRankIcon } from "../../types/grade";
import { BaseProfile } from "../../assets";
import styled from "styled-components";

interface LoginTabProps {
  user: UserModel;
}

const LoginTab = ({ user }: LoginTabProps) => {
  return (
    <Wrapper>
      <Profile src={BaseProfile} />
      <Name>{user.name}</Name>
      <Major>{user.major}</Major>
      <Info>{user.description || "자기소개를 입력해주세요"}</Info>
      <RankImg src={getRankIcon(user.grade)} />
    </Wrapper>
  );
};

export default LoginTab;

const RankImg = styled.img`
  width: 216px;
  height: 226px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #1f262c;
  padding: 36px 74px;
  border-radius: 70px;
  width: 340px;
  height: 144px;
  font-size: 23px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  background-color: #1b69ff;
  height: 810px;
  width: 540px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  gap: 15px;
  padding: 72px 100px 16px;
  margin: 0px 38px;
`;

const Profile = styled.img`
  width: 250px;
  height: 250px;
`;

const Name = styled.span`
  font-size: 56px;
  font-weight: 600;
`;
const Major = styled.span`
  font-size: 40px;
  font-weight: 400px;
`;
