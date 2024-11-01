import SignUp from "components/signUp";
import styled from "styled-components";

const SignUpPage = (): JSX.Element => {
  return (
    <Wrapper>
      <SignUp />
    </Wrapper>
  );
};

export default SignUpPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100dvh;
  align-items: center;
`;
