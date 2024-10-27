import { HeaderMenu } from "../components/myPage";
import styled from "styled-components";

const MyPage = () => {
  return (
    <Wrapper>
      <HeaderMenu user={"홍길동"} />
    </Wrapper>
  );
};
export default MyPage;

const Wrapper = styled.div``;
