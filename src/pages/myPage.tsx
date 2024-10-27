import { HeaderMenu, ProgressBar } from "../components/myPage";
import styled from "styled-components";

const MyPage = () => {
  return (
    <Wrapper>
      <HeaderMenu user={"홍길동"} />
      <ProgressBar value={77} />
    </Wrapper>
  );
};
export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
