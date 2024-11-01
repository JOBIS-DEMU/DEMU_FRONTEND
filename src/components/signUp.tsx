import styled from "styled-components";

import { LogoImg } from "../assets/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Button } from "../components";

const SignUp = (): JSX.Element => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [chkPassword, setChkPassword] = useState<string>("");
  const onPassword = (value: string): boolean => {
    setPassword(value);
    return true;
  };
  const onChkPassword = (value: string): boolean => {
    setChkPassword(value);
    if (value === password) {
      return true;
    } else {
      return false;
    }
  };
  const onEmail = (value: string): boolean => {
    setEmail(value);
    if (value.indexOf("@dsm.hs.kr") != -1) {
      return true;
    } else {
      return false;
    }
  };

  const onNickName = (value: string): boolean => {
    setNickName(value);
    if (value.length <= 20) {
      return true;
    } else {
      return false;
    }
  };

  const onClick = () => {};
  return (
    <Wrapper>
      <LogoContainer>
        <LogoBox>
          <Logo src={LogoImg} />
        </LogoBox>
        <InputContainer>
          <Input
            label="이메일"
            onChange={onEmail}
            value={email}
            errorMessage="유효하지 않은 이메일 입니다"
            hint="@dsm.hs.kr"
          />
          <Input
            label="닉네임"
            onChange={onNickName}
            value={nickName}
            errorMessage="이미 있는 닉네임 입니다"
            placeholder="20자 이하의 닉네임을 입력해주세요"
          />
          <Input
            label="비밀번호"
            isPassword
            onChange={onPassword}
            value={password}
            errorMessage="비밀번호가 올바르지 않습니다."
          />
          <Input
            label="비밀번호 확인"
            isPassword
            onChange={onChkPassword}
            value={chkPassword}
            errorMessage="비밀번호가 일치 하지 않습니다."
          />
        </InputContainer>
      </LogoContainer>
      <Footer>
        <BtnBox>
          <Button children="회원가입" onClick={onClick} />
        </BtnBox>

        <NoAccount>
          계정이 있다면?
          <GoSignUp onClick={() => navigate("/")}>로그인 하기</GoSignUp>
        </NoAccount>
      </Footer>
    </Wrapper>
  );
};

export default SignUp;

const GoSignUp = styled.a`
  color: #1b69ff;
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
`;

const NoAccount = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
`;

const Logo = styled.img`
  width: 302px;
  height: 105px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 65px;
  gap: 10px;
`;

const BtnBox = styled.div`
  width: 450px;
  height: 81px;
`;

const Wrapper = styled.div`
  border-radius: 50px;
  padding: 50px 158px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
  gap: 400px;
`;
