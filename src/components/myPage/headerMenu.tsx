import { useNavigate } from "react-router-dom";
import { MyPageLineOption, TitleLogo } from "@assets/index";
import styled from "styled-components";

interface headerMenuProps {
  user: string;
}

const HeaderMenu = ({ user }: headerMenuProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TitleBox>
        <img src={TitleLogo} />
        <Hello>
          안녕하세요! <strong>{user}</strong>님
        </Hello>
      </TitleBox>
      <Option>
        <Selection onClick={() => navigate("/home")}>홈</Selection>
        <img src={MyPageLineOption} />
        <Selection onClick={() => navigate("/")}>로그아웃</Selection>
      </Option>
    </Wrapper>
  );
};

export default HeaderMenu;

const Selection = styled.span`
  font-size: 24px;
  font-weight: 800;
  width: fit-content;
  white-space: nowrap;
  cursor: pointer;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 200px;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #707583;
  padding: 44px 220px 44px 100px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 946px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
`;

const Hello = styled.div`
  font-size: 32px;
  width: 300px;
  font-weight: 500;
  & > strong {
    font-weight: 600;
  }
`;
