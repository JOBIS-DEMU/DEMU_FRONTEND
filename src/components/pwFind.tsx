import { LogoImg } from "../assets";
import styled from "styled-components";
import Input from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const PwFind = () => {
  const [email, setEmail] = useState<string>("");
  const onClick = () => {};
  const navigate = useNavigate();
  const onEmail = (value: string): boolean => {
    setEmail(value);
    if (value.indexOf("@dsm.hs.kr") != -1) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Wrapper>
      <Logo src={LogoImg} />
      <Field>
        <TextBox>
          <Title>임시 비밀번호 발급</Title>
          <Exp>
            가입시 등록 했던 이메일로 임시 비밀번호가 포함 된 메일을
            보내드릴게요
          </Exp>
        </TextBox>
        <Footer>
          <InputBox>
            <Input
              label="이메일"
              value={email}
              onChange={onEmail}
              errorMessage="유효하지 않은 이메일 입니다"
              hint="@dsm.hs.kr"
            />
          </InputBox>
          <BtnBox>
            <Button children="전송하기" onClick={onClick}></Button>
          </BtnBox>
        </Footer>
      </Field>

      <NoAccount>
        비밀번호가 생각났다면?
        <GoSignUp onClick={() => navigate("/")}>로그인 하기</GoSignUp>
      </NoAccount>
    </Wrapper>
  );
};

export default PwFind;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 162px;
`;

const BtnBox = styled.div`
  width: 450px;
  height: 81px;
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

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 97px;
  align-items: center;
`;

const InputBox = styled.div`
  width: 450px;
`;

const Logo = styled.img`
  width: 230px;
  height: 80px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Exp = styled.span`
  font-size: 18px;
  text-align: center;
  color: #98a4af;
  width: 339px;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 100px 225px 35px 225px;
  border-radius: 50px;
`;
