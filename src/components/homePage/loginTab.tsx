import { BaseProfile } from "../../assets";
import styled from "styled-components";

interface loginTabProps {
  name: string;
  major: string;
  id: number;
  rank: string;
  profile: string;
}

const LoginTab = ({ name, major, id, rank, profile }: loginTabProps) => {
  return (
    <Wrapper>
      <Profile src={profile} />
      <Info>
        <Name>{name}</Name>
        <Major>{major}</Major>
      </Info>
      <Footer>
        <Id>{id}</Id>
        <Rank src={rank} />
      </Footer>
    </Wrapper>
  );
};

export default LoginTab;

const Rank = styled.img`
  width: 216px;
  height: 226px;
`;

const Id = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffffff;
  color: #1f262c;
  padding: 36px 74px;
  border-radius: 70px;
  width: 340px;
  height: 144px;
  font-size: 23px;
  font-weight: 600;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
