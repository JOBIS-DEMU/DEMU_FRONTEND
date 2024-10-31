import { WritePageAddImage } from "../../assets";
import styled from "styled-components";

const WriteField = () => {
  return (
    <Wrapper>
      <ImageBox>
        <AddImageBox>
          <img src={WritePageAddImage} />
          <ImgCnt>5/5</ImgCnt>
        </AddImageBox>
      </ImageBox>
    </Wrapper>
  );
};

export default WriteField;

const ImgCnt = styled.span`
  font-size: 14px;
  color: #98a4af;
  font-weight: 500;
`;

const AddImageBox = styled.div`
  width: 90px;
  height: 90px;
  border: 1px solid #98a4af;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
`;

const ImageBox = styled.div``;

const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 820px;
  height: 940px;
  padding: 40px 0px 0px 0px;
`;
