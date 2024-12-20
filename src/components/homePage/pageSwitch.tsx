import { useEffect, useState } from "react";
import { PageArrowRight, PageArrowLeft } from "../../assets/index";
import styled from "styled-components";

const PageSwitch = () => {
  let [count, setCount] = useState<number>(1);
  let [pageNums, setPageNums] = useState<number[]>([]);
  useEffect(() => {
    const newPageNums = [];
    for (let i = 0; i < 10; i++) {
      newPageNums.push(count > 10 ? count - 9 + i : i + 1);
    }
    setPageNums(newPageNums);
  }, [count]);

  const pageDown = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <Wrapper>
      <ArrowBtn src={PageArrowLeft} onClick={pageDown} />
      <Field>
        {pageNums.map((i) => (
          <PageNum
            onClick={() => setCount(i)}
            key={i}
            color={i === count ? "#1B69FF" : "#707583"}
          >
            {i}
          </PageNum>
        ))}
      </Field>
      <ArrowBtn src={PageArrowRight} onClick={() => setCount(count + 1)} />
    </Wrapper>
  );
};

export default PageSwitch;

const ArrowBtn = styled.img`
  cursor: pointer;
`;

const PageNum = styled.span`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.color};
  cursor: pointer;
  width: 50px;
`;

const Field = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 20px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 62px;
  margin-top: 79px;
  height: 50px;
  width: 100%;
  gap: 20px;
`;
