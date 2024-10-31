import { useState } from "react";
import { AddProfile, infoEditIcon, SetIcon } from "../../assets";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface loginTabProps {
  name: string;
  major?: string;
  info?: string;
  rank: string;
  profile: string;
}

const MyPageLoginTab = ({
  name,
  major = "전공이 없습니다.",
  rank,
  profile,
}: loginTabProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [info, setInfo] = useState<string>(
    "20자 이하의 자기소개를 입력해주세요!"
  );
  const navigate = useNavigate();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      setEdit(false);
    }
  };
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setInfo(value);
  };
  const isDefaultInfo = info === "20자 이하의 자기소개를 입력해주세요!";

  return (
    <Wrapper>
      <SetIconBox>
        <img src={SetIcon} onClick={() => navigate("/setPage")} />
      </SetIconBox>
      <AddProfileLabel htmlFor="file">
        <Profile src={file ? URL.createObjectURL(file) : profile} />
        <AddProfileImg src={AddProfile} />
      </AddProfileLabel>
      <AddProfileInput type="file" id="file" onChange={onFileChange} />

      <Info>
        <Name>{name}</Name>
        <Major>{major}</Major>
      </Info>
      <Footer>
        <SelfInfo info={info} isDefaultInfo={isDefaultInfo}>
          {edit ? (
            <EditInfo
              onKeyDown={onKeyDown}
              placeholder="20자 이하의 자기소개를 작성해주세요!"
              onChange={onChange}
            />
          ) : (
            <InfoBox
              onClick={() => {
                isDefaultInfo ? setEdit(true) : setEdit(false);
              }}
            >
              {info || "20자 이하의 자기소개를 작성해주세요!"}
            </InfoBox>
          )}
          {isDefaultInfo || edit ? null : (
            <InfoEdit src={infoEditIcon} onClick={() => setEdit(true)} />
          )}
        </SelfInfo>
        <Rank src={rank} />
      </Footer>
    </Wrapper>
  );
};

export default MyPageLoginTab;

const InfoBox = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const EditInfo = styled.textarea`
  width: 90%;
  font-size: 23px;
  height: 70%;
  border-radius: 70px;
  white-space: normal;
  padding: 20px 0px 20px 10px;
  &::placeholder {
    white-space: normal;
  }
`;

const InfoEdit = styled.img`
  cursor: pointer;
  padding-right: 26px;
`;

const SetIconBox = styled.div`
  width: 500px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const AddProfileLabel = styled.label`
  display: flex;
  justify-content: center;
  margin-left: 50px;
`;

const AddProfileImg = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
  position: relative;
  top: 190px;
  right: 60px;
`;

const AddProfileInput = styled.input`
  display: none;
`;

const Rank = styled.img`
  width: 216px;
  height: 226px;
`;

const SelfInfo = styled.div<{ info: string; isDefaultInfo: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  color: ${(props) => (props.isDefaultInfo ? "#98A4AF" : "#1f262c")};
  border-radius: 70px;
  width: 340px;
  height: 124px;
  font-size: 23px;
  font-weight: 600;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: #1b69ff;
  height: 810px;
  width: 540px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  gap: 15px;
  padding: 26px 100px 16px;
  margin: 0px 38px;
`;

const Profile = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 500px;
`;

const Name = styled.span`
  font-size: 56px;
  font-weight: 600;
  text-align: center;
`;
const Major = styled.span`
  font-size: 30px;
  font-weight: 400px;
`;
