import { useLocation, useNavigate } from "react-router-dom";
import { HeaderIcon, LineOption, SearchIcon } from "../../assets";
import styled from "styled-components";
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";

const HeaderMenu = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const { user } = useUser();
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
        if (window.location.pathname === "/searchPage") {
          window.location.reload();
        }
      }
    }
  };

  const clickSearch = () => {
    if (search.trim() !== "") {
      navigate("/searchPage");
      if (window.location.pathname === "/searchPage") {
        window.location.reload();
      }
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
        {user ? (
          <Selection onClick={() => navigate("/")}>로그아웃</Selection>
        ) : (
          <Selection onClick={() => navigate("/")}>로그인</Selection>
        )}
      </Option>
    </Wrapper>
  );
};