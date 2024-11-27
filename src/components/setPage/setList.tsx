import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  SetNickname,
  SetPassword,
  SetMajor,
  Logout,
} from "../../assets";

interface SetItemProps {
  icon: string;
  text: string;
  onClick: () => void;
}

const SetItem = ({ icon, text, onClick }: SetItemProps) => {
  return (
    <ItemWrapper onClick={onClick}>
      <img src={icon} alt={text} />
      <ItemText>{text}</ItemText>
    </ItemWrapper>
  );
};

const SetList = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <SetItem icon={SetNickname} text="닉네임 변경" onClick={() => {}} />
      <SetItem icon={SetPassword} text="비밀번호 변경" onClick={() => {}} />
      <SetItem icon={SetMajor} text="전공 변경" onClick={() => {}} />
      <SetItem icon={Logout} text="로그아웃" onClick={handleLogout} />
    </Wrapper>
  );
};

export default SetList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px;
  background-color: white;
  border: 1px soild #E9E9E9;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  cursor: pointer;
  border-bottom: 1px solid #E9E9E9;

  &:hover {
    background-color: #F9FAFB;
  }
`;

const ItemText = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #1F262C;
`;