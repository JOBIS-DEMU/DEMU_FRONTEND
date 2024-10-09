import styled from "styled-components";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Arrow, LogoImg } from "../assets/index";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  
  const onEmail = (value: string): boolean | any => {
    setEmail(value);
    return !value.includes(' ');
  };

  const onPassword = (value: string): boolean | any => {
    setPassword(value);
    return !value.includes(' ') && value.length >= 8 || value.length == 0;
  };

  const onClick = () => {};
  return (
    <Wrapper>
      <Container>
        <Logo src="src\assets\logo.svg" />
        <TextBox>
          <TextInput
            label="이메일"
            onChange={onEmail}
            value={email}
            errorMessage="유효하지 않은 이메일 입니다"
            hint="@dsm.hs.kr"
          />
        </TextBox>
        <PasswordBox>
          <TextInput
            isPassword
            label="비밀번호"
            onChange={onPassword}
            value={password}
            placeholder="8자 이상의 비밀번호를 입력해주세요"
            errorMessage="비밀번호가 올바르지 않습니다."
          />
        </PasswordBox>
        <BtnBox>
          <Button
            disabled={password.length == 0 || email.length == 0}
            onClick={onClick}
          >로그인</Button>
        </BtnBox>
        <LoginOption>
          <PsFind>비밀번호 찾기 {`>`}</PsFind>
        </LoginOption>
      </Container>
    </Wrapper>
  );
};

export default Login;

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

const PsFind = styled.div`
  display: flex;
  justify-content: end;
  gap: 7px;
  cursor: pointer;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 300px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
`;

const LoginOption = styled.div`
  display: flex;
  gap: 220px;
  cursor: pointer;
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

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 50px;
  padding: 62px 158px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100dvh;
  align-items: center;
`;