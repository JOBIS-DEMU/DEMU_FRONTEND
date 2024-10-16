import Button from "./Button";
import { LogoImg } from "../assets/index";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const PwFind = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const onEmail = (value: string): boolean => {
    setEmail(value);
    return true;
  };
  const onClick = () => {};
  return (
    <Wrapper>
      <LogoContainer>
        <LogoBox>
          <Logo src={LogoImg} />
        </LogoBox>
        <TextField>
          <Title>비밀번호 찾기</Title>
          <Ex>
            가입시 등록 했던 이메일로 임시 비밀번호가 포함 된 메일을
            보내드릴게요
          </Ex>
        </TextField>
        <InputContainer>
          <Input
            label="이메일"
            onChange={onEmail}
            value={email}
            errorMessage="유효하지 않은 이메일 입니다"
            hint="@dsm.hs.kr"
          />
        </InputContainer>
      </LogoContainer>
      <Footer>
        <LoginOption>
          <BtnBox>
            <Button children="전송하기" onClick={onClick} />
          </BtnBox>
        </LoginOption>
        <NoAccount>
          비밀번호가 생각났다면?
          <GoSignUp onClick={() => navigate("/")}>로그인 하기</GoSignUp>
        </NoAccount>
      </Footer>
    </Wrapper>
  );
};

export default PwFind;

const TextField = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 30px;
`;

const Ex = styled.p`
  color: #98a4af;
  width: 339px;
`;

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

const Wrapper = styled.div`
  border-radius: 50px;
  padding: 62px 158px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 183px;
`;
