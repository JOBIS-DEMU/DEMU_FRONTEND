import { useState } from "react";
import styled from "styled-components";

const MainTab = () => {
  const [selectIndex, setSelectIndex] = useState<number | null>(null);

  const Option = [
    {
      name: "backend",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "frontend",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "iOS",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "design",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "AI",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "flutter",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "AOS",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "embedded",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "full stack",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "game",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "devops",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "security",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "전체 글",
      clickColor: "#1B69FF",
      color: "#707583",
    },
    {
      name: "기타 전공",
      clickColor: "#1B69FF",
      color: "#707583",
    },
  ];

  const onSelectIndex = (index: number) => {
    setSelectIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Wrapper>
      <FilterBox>
        {Option.map(({ name, clickColor, color }, index) => (
          <Select
            key={index}
            color={selectIndex === index ? clickColor : color}
            onClick={() => onSelectIndex(index)}
          >
            {name}
          </Select>
        ))}
      </FilterBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 142px;
`;
const FilterBox = styled.div`
  display: flex;
  gap: 19px;
  border-top: 1px solid #707583;
  border-bottom: 1px solid #707583;
  padding: 2px 0px 0px 0px;
  width: fit-content;
  height: fit-content;
`;
const Select = styled.span`
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  color: ${(proops) => proops.color};
`;

export default MainTab;
