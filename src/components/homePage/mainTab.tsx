import { useState } from "react";
import styled from "styled-components";

const MainTab = () => {
  const [select, setSelect] = useState(false);

  return (
    <Wrapper>
      <FilterBox>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          backend
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          fronted
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          iOS
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          design
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          AI
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          flutter
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          AOS
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          embedded
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          full stack
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          game
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          devops
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          security
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          전체 글
        </Select>
        <Select
          onClick={() => setSelect(!select)}
          color={select ? "#1B69FF" : "#707583"}
        >
          기타 전공
        </Select>
      </FilterBox>
    </Wrapper>
  );
};

export default MainTab;

const Wrapper = styled.div`
  margin-left: 142px;
`;
const FilterBox = styled.div`
  display: flex;
  gap: 19px;
  border-top: 1px solid #707583;
  border-bottom: 1px solid #707583;
  padding: 2px 0px;
  width: fit-content;
  height: 31px;
`;
const Select = styled.span`
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  color: ${proops => proops.color};
`;
