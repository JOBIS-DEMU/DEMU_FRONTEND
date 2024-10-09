import styled from "styled-components";
import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Arrow, LogoImg } from "../assets/index";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const onPassword = (value: string): boolean | any => {
    setPassword(value);
  };
  const onEmail = (value: string): boolean | any => {
    setEmail(value);
  };
  const onClick = () => {};
  return (
    <Wrapper>
      <Container>
        <Logo src="src\assets\logo.svg" />
        <TextBox>
          <TextInputzz
            label="이메일"
            onChange={onEmail}
            value={email}
            errorMessage="유효하지 않은 이메일 입니다"
            placeholder="@dsm.hs.kr"
          />
        </TextBox>
        <PasswordBox>
          <PasswordInput
            label="비밀번호"
            onChange={onPassword}
            value={password}
            errorMessage="비밀번호가 올바르지 않습니다."
          />
        </PasswordBox>
        <BtnBox>
          <Button children="로그인" onClick={onClick} />
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
  gap: 220px;
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
  flex-direction: column;
  gap: 21px;
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