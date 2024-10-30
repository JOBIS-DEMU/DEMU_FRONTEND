import styled from "styled-components";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Arrow, LogoImg } from "../assets/index";
import AuthService, { AuthResponse } from "../services/autnService";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const onPassword = (value: string): boolean => {
    setPassword(value);
    return value.length >= 8 && value.length <= 20;
  };
  const onEmail = (value: string): boolean => {
    setEmail(value);
    return value.length >= 3 && value.length <= 20;
  };
  const getVaild = () => {
    return !isFetching && email.length >= 3 && email.length <= 20 && password.length >= 8 && password.length <= 20
  }
  const onClick = async () => {
    if (isFetching) {
      return;
    }
    setIsFetching(true);
    const response: AuthResponse = await AuthService.login(email, password);
    switch (response) {
      case AuthResponse.OK:
        navigate("/home")
        break;
      case AuthResponse.NOTFOUND:
        alert('없는 계정입니다.');
        break;
      case AuthResponse.BAD:
        alert('비밀번호가 틀렸습니다.');
        break;
      default:
        alert('문제가 발생했습니다.');
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
            errorMessage="아이디는 3자 이상 20자 이하로 입력해주세요."
            hint="@dsm.hs.kr"
          />
          <Input
            isPassword
            label="비밀번호"
            onChange={onPassword}
            value={password}
            errorMessage="비밀번호는 8자 이상 20자 이하로 입력해주세요."
          />
        </InputContainer>
      </LogoContainer>
      <Footer>
        <LoginOption>
          <BtnBox>
            <Button disabled={!getVaild()} children="로그인" onClick={onClick} />
          </BtnBox>
          <PsFind onClick={() => navigate("/pwFind")}>
            비밀번호 찾기 <img src={Arrow} />
          </PsFind>
        </LoginOption>
        <NoAccount>
          계정이 없다면?
          <GoSignUp onClick={() => navigate("/signUp")}>회원가입 하기</GoSignUp>
        </NoAccount>
      </Footer>
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
