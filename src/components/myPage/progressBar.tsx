import styled from "styled-components";

interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <Wrapper>
      <ExpBar value={value}></ExpBar>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  width: 900px;
  height: 36px;
  border-radius: 18px;
  background-color: #ffffff;
`;

const ExpBar = styled.div<{ value: number }>`
  background: linear-gradient(90deg, #1ad655, #9eb1a7);
  width: ${props => props.value}%;
  height: 100%;
  border-radius: 18px;
`;
