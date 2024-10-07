import styled from "styled-components";
import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Login = (): JSX.Element => {
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
          <TextInput
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

const PsFind = styled.span`
  padding-top: 5px;
`;

const LoginOption = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 220px;
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
