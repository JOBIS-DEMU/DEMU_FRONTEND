import styled from "styled-components";
import SetList from "../components/setPage/setList";
import UserCard from "../components/setPage/userCard";
import { HeaderMenu } from "../components/myPage";

const SetPage = () => {
  return (
    <Wrapper>
      <HeaderMenu user={"홍길동"} />
      <Container>
        <UserCard/>
        <SetList />
      </Container>
    </Wrapper>
  );
};

export default SetPage;

const Wrapper = styled.div`
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  padding: 0px 182px 0px 168px;
  background-color: #FFFFFF;
  border-radius: 15px;
  width: 100%;
  gap: 34px;
  display: flex;
  flex-direction: row;
  min-height: 500px;
`;
