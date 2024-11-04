import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthService, { AuthResponse } from "../services/autnService";
import { Input, Button } from "../components";
import { LogoImg } from "../assets";

const SignUp = (): JSX.Element => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const onPassword = (value: string): boolean => {
    setPassword(value);
    return value.length >= 8 && value.length <= 20;
  };
  const onChkPassword = (value: string): boolean => {
    setCheckPassword(value);
    return value === password;
  };
  const onEmail = (value: string): boolean => {
    setEmail(value);
    return value.length >= 1 && value.length <= 20;
  };
  const onNickName = (value: string): boolean => {
    setNickname(value);
    return value.length >= 3 && value.length <= 10;
  };
  const getVaild = () => {
    return !isFetching
    && email.length >= 1
    && email.length <= 20
    && password.length >= 8
    && password.length <= 20
    && checkPassword === password
    && nickname.length >= 3
    && nickname.length <= 10
  }
  const onClick = async () => {
    if (isFetching) {
      return;
    }
    setIsFetching(true);
    const response: AuthService = await AuthService.signup(email, nickname, password);
    switch (response) {
      case AuthResponse.OK:
        navigate("/home")
        break;
      case AuthResponse.BAD:
        alert('이미 존재하는 닉네임입니다.');
        break;
      case AuthResponse.FORBIDDEN:
        alert('이미 가입된 이메일입니다.');
        break;
      default:
        alert('서비스 장애가 발생했습니다. 나중에 다시 접속해주세요.');
        window.location.reload();
    }
    setIsFetching(false);
  };
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
            errorMessage="아이디는 1자 이상 20자 이하로 입력해주세요."
            hint="@dsm.hs.kr"
          />
          <Input
            label="닉네임"
            onChange={onNickName}
            value={nickname}
            errorMessage="닉네임은 3자 이상 10자 이하로 입력해주세요."
            placeholder="10자 이하의 닉네임을 입력해주세요"
          />
          <Input
            label="비밀번호"
            isPassword
            onChange={onPassword}
            value={password}
            errorMessage="비밀번호는 8자 이상 20자 이하로 입력해주세요."
          />
          <Input
            label="비밀번호 확인"
            isPassword
            onChange={onChkPassword}
            value={checkPassword}
            errorMessage="비밀번호가 일치 하지 않습니다."
          />
        </InputContainer>
      </LogoContainer>
      <Footer>
        <BtnBox>
          <Button disabled={!getVaild()} onClick={onClick}>회원가입</Button>
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
