import { MajorSelectDown, TitleLogo } from "../../assets";
import styled from "styled-components";
import MajorBottomSheet, { sheetController } from "./MajorBottomSheet";
import { useState } from "react";
import Major from "../../types/major";

const HeaderMenu = () => {
  const [selectedMajor, setSelectedMajor] = useState<Major>(Major.NONE);

  const onSelected = (major: Major) => {
    setSelectedMajor(major);
  };

  return (
    <Wrapper>
      <LogoImg src={TitleLogo} />
      <MajorBox onClick={sheetController.open}>
        <MajorText>{selectedMajor}</MajorText>
        <img src={MajorSelectDown} />
      </MajorBox>
      <SaveBtn>글 게시</SaveBtn>
      <MajorBottomSheet onSelected={onSelected} value={selectedMajor} />
    </Wrapper>
  );
};

export default HeaderMenu;

const LogoImg = styled.img`
  /* margin-left: 180px; */
`;

const SaveBtn = styled.button`
  background-color: #1b69ff;
  width: 240px;
  height: 80px;
  padding: 25px 84px;
  white-space: nowrap;
  font-size: 24px;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

const MajorText = styled.span`
  color: #1b69ff;
  font-size: 48px;
  font-weight: 600;
`;

const MajorBox = styled.div`
  display: flex;
  cursor: pointer;
  gap: 16px;
  width: 200px;
`;

const Wrapper = styled.div`
  background-color: #f9fafb;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 500px;
  padding: 20px 60px 20px 180px;
  width: 100vw;
`;
