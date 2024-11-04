import styled from "styled-components";
import MajorBottomSheet, { sheetController } from "./MajorBottomSheet";
import { useState } from "react";
import Major from "../../types/major";
import { MajorSelectDown, TitleLogo } from "../../assets";
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const [selectedMajor, setSelectedMajor] = useState<Major>(Major.NONE);
  const [post, setPost] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSelected = (major: Major) => {
    setSelectedMajor(major);
  };

  return (
    <Wrapper>
      <Logo
        src={TitleLogo}
        onClick={() => {
          navigate("/home");
        }}
      />
      <MajorBox onClick={sheetController.open}>
        <MajorText>{selectedMajor.toLowerCase()}</MajorText>
        <img src={MajorSelectDown} />
      </MajorBox>
      <SaveBtn onClick={() => setPost(true)} post={post}>
        {post ? "게시 완료" : "글 게시"}
      </SaveBtn>
      <MajorBottomSheet onSelected={onSelected} value={selectedMajor} />
    </Wrapper>
  );
};

export default HeaderMenu;

const Logo = styled.img`
  cursor: pointer;
`;

const SaveBtn = styled.button<{ post: boolean }>`
  background-color: ${(props) => (props.post ? "#C9C9C9" : "#1b69ff")};
  width: 240px;
  height: 80px;
  padding: 25px 84px;
  white-space: nowrap;
  font-size: 24px;
  border: none;
  color: ${(props) => (props.post ? "#000000" : "#ffffff")};
  cursor: pointer;
  display: flex;
  justify-content: center;
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
