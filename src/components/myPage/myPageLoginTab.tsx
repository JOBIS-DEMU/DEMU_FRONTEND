import { useState, useEffect } from "react";
import { AddProfile, infoEditIcon, SetIcon } from "../../assets/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../contexts/UserContext';
import { getRankIcon } from "../../types/grade";
import { BaseProfile } from "../../assets/index";
import UserService, { UserResponse } from "../../services/userService";

const MyPageLoginTab = () => {
  const { user, refreshUser } = useUser();
  const [file, setFile] = useState<File | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [info, setInfo] = useState<string>(
    "20자 이하의 자기소개를 입력해주세요!"
  );
  const navigate = useNavigate();

  useEffect(() => {
    refreshUser();
  }, []);

  useEffect(() => {
    if (user) {
      setInfo(user.description.toString());
    }
  }, [user]);

  if (!user) return null;
  
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      const response: UserResponse = await UserService.setImage(files[0]);
      if (response != UserResponse.OK) {
        alert('잘못된 형식의 이미지입니다.');
        return;
      }
      setFile(files[0]);
      refreshUser();
    }
  };
  const onKeyDown = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      const response: UserResponse = await UserService.setDescription(info);
      if (response == UserResponse.INVAILD) {
        alert('잘못된 형식의 자기소개입니다.');
        return;
      }
      setEdit(false);
      refreshUser();
    }
  };
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setInfo(value);
  };
  const isDefaultInfo = info === "20자 이하의 자기소개를 입력해주세요!";

  const handleInfoClick = () => {
    if (isDefaultInfo) {
      setEdit(true);
    }
  };

  return (
    <Wrapper>
      <SetIconBox>
        <img src={SetIcon} onClick={() => navigate("/setPage")} />
      </SetIconBox>
      <AddProfileLabel htmlFor="file">
        <Profile
          src={
            file 
              ? URL.createObjectURL(file)
              : user.image
                ? user.image
                : BaseProfile
          } 
        />
        <AddProfileImg src={AddProfile} />
      </AddProfileLabel>
      <AddProfileInput type="file" id="file" onChange={onFileChange} />

      <Info>
        <Name>{user.name}</Name>
        <Major>{user.major}</Major>
      </Info>
      <Footer>
        <SelfInfo $info={info} $isDefaultInfo={isDefaultInfo}>
          {edit ? (
            <EditInfo
              onKeyDown={onKeyDown}
              placeholder="20자 이하의 자기소개를 작성해주세요!"
              onChange={onChange}
              maxLength={20}
              value={info}
            />
          ) : (
            <InfoBox onClick={handleInfoClick}>
              {info}
            </InfoBox>
          )}
          {isDefaultInfo || edit ? null : (
            <InfoEdit src={infoEditIcon} onClick={() => setEdit(true)} />
          )}
        </SelfInfo>
        <Rank src={getRankIcon(user.grade)} />
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

const SelfInfo = styled.div<{ $info: string; $isDefaultInfo: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  color: ${(props) => (props.$isDefaultInfo ? "#98A4AF" : "#1f262c")};
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
