import { WritePageAddImage, WritePageImageDel } from "../../assets/index";
import { useState } from "react";

import styled from "styled-components";

const WriteField = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files: newFiles } = e.target;
    if (newFiles) {
      const filesArray = Array.from(newFiles);
      setFiles((prevFiles) => [...prevFiles, ...filesArray]);
    }
    e.target.value = "";
  };
  const onDelFile = () => {
    setFiles((prevFiles) => prevFiles.slice(0, -1));
  };
  const onTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
  };
  const onContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
  };
  return (
    <Wrapper>
      <ImageBox>
        <AddImageLabel htmlFor="file">
          <img src={WritePageAddImage} />
          <ImgCnt>{files.length}/5</ImgCnt>
        </AddImageLabel>
        <AddImageInput
          type="file"
          id="file"
          onChange={onFileChange}
          disabled={files.length >= 5}
        />
        {files.map((i, index) => (
          <Image src={URL.createObjectURL(i)} key={index} />
        ))}
        <ImgDelBox file={files} onClick={onDelFile}>
          <ImgDel src={WritePageImageDel} />
        </ImgDelBox>
      </ImageBox>
      <TitleBox>
        <TitleInput
          placeholder="제목(25자 이하)"
          onChange={onTitle}
          maxLength={25}
          value={title}
        />
      </TitleBox>
      <ContentBox>
        <Text
          placeholder="(3000자 이하) 본문에 내용을 추가해 주세요"
          onChange={onContent}
          maxLength={3000}
          value={content}
        />
      </ContentBox>
    </Wrapper>
  );
};

export default WriteField;

const ImgDel = styled.img`
  width: 30px;
  height: 30px;
`;

const ImgDelBox = styled.div<{ file: File[] }>`
  height: 100%;
  display: ${(props) => (props.file.length !== 0 ? "flex" : "none")};
  align-items: flex-end;
  cursor: pointer;
`;

const TitleInput = styled.input`
  font-size: 48px;
  border: none;
  outline: none;
  width: 100%;
  &::placeholder {
    color: #98a4af;
  }
`;

const ContentBox = styled.div`
  height: 100%;
`;

const Text = styled.textarea`
  width: 648px;
  font-size: 24px;
  border: none;
  outline: none;
  height: 100%;
  &::placeholder {
    color: #98a4af;
  }
`;

const TitleBox = styled.div`
  font-size: 48px;
  color: #98a4af;
  font-weight: 600;
  padding-bottom: 32px;
  border-bottom: 1px solid #e9e9e9;
  width: 648px;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
`;

const AddImageInput = styled.input`
  display: none;
`;

const ImgCnt = styled.span`
  font-size: 14px;
  color: #98a4af;
  font-weight: 500;
`;

const AddImageLabel = styled.label`
  width: 90px;
  height: 90px;
  border: 1px solid #98a4af;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  cursor: pointer;
`;

const ImageBox = styled.div`
  display: flex;
  gap: 20px;
`;

const Wrapper = styled.div`
  gap: 47px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 820px;
  height: 940px;
  padding: 40px 0px 0px 0px;
`;
