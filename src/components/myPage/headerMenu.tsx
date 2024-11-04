import { useNavigate } from "react-router-dom";
import { MyPageLineOption, TitleLogo } from "../../assets/index";
import UserModel from "../../models/user";
import { removeToken } from "../../apis/Api";
import styled from "styled-components";

interface HeaderMenuProps {
  user: UserModel;
}

const HeaderMenu = ({ user }: HeaderMenuProps) => {
  const navigate = useNavigate();
  const logout = () => {
    removeToken();
    navigate("/");
  }

  return (
    <Wrapper>
      <TitleBox>
        <img src={TitleLogo} />
        <Hello>
          안녕하세요! <strong>{user.name}</strong>님
        </Hello>
      </TitleBox>
      <Option>
        <Selection onClick={() => navigate("/home")}>홈</Selection>
        <img src={MyPageLineOption} />
        <Selection onClick={logout}>로그아웃</Selection>
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
  width: 320px;
  font-weight: 500;
  & > strong {
    font-weight: 600;
  }
`;
