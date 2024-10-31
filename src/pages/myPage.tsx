import MyPageLoginTab from "../components/myPage/myPageLoginTab";
import { BaseProfile } from "../assets";
import { Diamond } from "../assets/rankIcons";
import { HeaderMenu, ProgressBar, MyPost } from "../components/myPage";
import styled from "styled-components";

const MyPage = () => {
  return (
    <Wrapper>
      <HeaderMenu user={"홍길동"} />
      <MainTab>
        <Field>
          <ProgressBar value={77} />
          <MyPost />
        </Field>
        <MyPageLoginTab name="정승우" rank={Diamond} profile={BaseProfile} />
      </MainTab>
    </Wrapper>
  );
};
export default MyPage;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-left: 86px;
  width: 65%;
`;

const MainTab = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
