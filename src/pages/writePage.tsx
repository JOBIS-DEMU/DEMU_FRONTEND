import { HeaderMenu, WriteField } from "../components/writePage";
import styled from "styled-components";

const WritePage = () => {
  return (
    <Wrapper>
      <HeaderMenu />
      <WriteField />
    </Wrapper>
  );
};

export default WritePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
