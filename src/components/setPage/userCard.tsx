import styled from "styled-components";
import { BaseProfile } from "../../assets";

const UserCard = () => {
  return (
    <Wrapper>
      <Profile src={BaseProfile} />
      <Name>홍길동</Name>
      <Description>전공이 없습니다</Description>
    </Wrapper>
  );
};

export default UserCard;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 32px 66px;
  border: 1px solid #E9E9E9;
`;

const Profile = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 500px;
`;

const Name = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #1F262C;
`;

const Description = styled.span`
  font-size: 15px;
  color: #98A4AF;
`;