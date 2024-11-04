import { useLocation, useNavigate } from "react-router-dom";
import { HeaderIcon, LineOption, SearchIcon } from "../../assets";
import styled from "styled-components";
import { useEffect, useState } from "react";

const HeaderMenu = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/searchPage") {
      const saved = localStorage.getItem("searchValue");
      if (saved) {
        setSearch(saved);
      }
    } else {
      localStorage.removeItem("searchValue");
    }
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    localStorage.setItem("searchValue", value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (search.trim() !== "") {
        navigate("/searchPage");
      }
    }
  };

  const clickSearch = () => {
    if (search.trim() !== "") {
      navigate("/searchPage");
    }
  };

  return (
    <Wrapper>
      <Container>
        <img src={HeaderIcon} />
        <InputBox>
          <SearchInput
            placeholder="검색"
            onChange={onChange}
            value={search}
            onKeyDown={handleEnter}
          />
          <SearchImg src={SearchIcon} onClick={clickSearch} />
        </InputBox>
      </Container>
      <Option>
        <Selection onClick={() => navigate("/home")}>홈</Selection>
        <img src={LineOption} />
        <Selection onClick={() => navigate("/myPage")}>마이페이지</Selection>
        <img src={LineOption} />
        <Selection onClick={() => navigate("/")}>로그인</Selection>
      </Option>
    </Wrapper>
  );
};

export default HeaderMenu;

const Selection = styled.span`
  cursor: pointer;
`;

const Option = styled.div`
  display: flex;
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  gap: 15px;
`;

const Container = styled.div`
  display: flex;
  gap: 30px;
  height: 76px;
`;

const SearchImg = styled.img`
  margin: 17px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background-color: #1b69ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 44px 102px 44px 142px;
  width: 100%;
`;
const InputBox = styled.div`
  background-color: #1b69ff;
  display: flex;
  align-items: center;
  border: 1.8px solid #707583;
`;

const SearchInput = styled.input`
  padding: 24px 0px 24px 36px;
  outline: none;
  border: none;
  width: 716px;
  height: 76px;

  font-size: 24px;
  &::placeholder {
    font-size: 24px;
    font-family: "Inter", sans-serif;
  }
`;
