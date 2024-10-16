import PwFind from "../components/pwFind";
import styled from "styled-components";

const PwFindPage = (): JSX.Element => {
  return (
    <Wrapper>
      <PwFind />
    </Wrapper>
  );
};

export default PwFindPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100dvh;
  align-items: center;
  flex-direction: column;
`;
