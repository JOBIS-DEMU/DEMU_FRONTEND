import { Bronze, Silver } from "../../assets/rankIcons";
import styled from "styled-components";

interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <Wrapper>
      <Field>
        <Text>
          <strong>실버</strong> 등급 까지 {100 - value}% 남았어요
        </Text>
        <ExpBox>
          <Rank src={Bronze} />
          <ExpBarBox>
            <ExpBar value={value}></ExpBar>
          </ExpBarBox>
          <Rank src={Silver} />
        </ExpBox>
      </Field>
    </Wrapper>
  );
};

export default ProgressBar;

const ExpBox = styled.div`
  display: flex;
  gap: 8px;
`;

const Rank = styled.img`
  width: 34px;
  height: 36px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  & > strong {
    font-weight: 800;
  }
`;

const Field = styled.div`
  width: 100%;

  background-color: #e9e9e9;
  padding: 26px 34px 26px 18px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ExpBarBox = styled.div`
  width: 680px;
  height: 36px;
  border-radius: 18px;
  background-color: #ffffff;
`;

const ExpBar = styled.div<{ value: number }>`
  background: linear-gradient(90deg, #1ad655, #9eb1a7);
  width: ${(props) => props.value}%;
  height: 100%;
  border-radius: 18px;
`;
