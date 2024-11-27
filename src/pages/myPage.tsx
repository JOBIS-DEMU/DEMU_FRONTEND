import MyPageLoginTab from "../components/myPage/myPageLoginTab";
import styled from "styled-components";
import { HeaderMenu, MyPost, ProgressBar } from "../components/myPage";
import { useUser } from "../contexts/UserContext";
import { useEffect } from "react";

const MyPage = () => {
  const { user, refreshUser } = useUser();
  
  useEffect(() => {
    refreshUser();
  }, []);
  
  if (!user) return null;

  return (
    <Wrapper>
      <HeaderMenu user={user} />
      <MainTab>
        <Field>
          <ProgressBar />
          <MyPost />
        </Field>
        <MyPageLoginTab />
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
