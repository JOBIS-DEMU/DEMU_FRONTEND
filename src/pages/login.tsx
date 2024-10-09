import styled from "styled-components";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Login = (): JSX.Element => {
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

const PsFind = styled.span`
  padding-top: 5px;
`;

const LoginOption = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 220px;
  cursor: pointer;
`;

const Logo = styled.img`
  margin-bottom: 50px;
`;

const TextBox = styled.div`
  width: 450px;
  margin-bottom: 10px;
`;
const PasswordBox = styled.div`
  width: 450px;
`;

const BtnBox = styled.div`
  width: 450px;
  height: 81px;
  margin-top: 50px;
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 50px;
  width: 566px;
  height: 645px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
