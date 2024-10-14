import Login from "../components/login";
import styled from "styled-components";

const LoginPage = (): JSX.Element => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100dvh;
  align-items: center;
  flex-direction: column;
`;
