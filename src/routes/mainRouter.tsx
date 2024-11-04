import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  PwFindPage,
  HomePage,
  MyPage,
  WritePage,
  MyBlogPage,
  SetPage,
  SearchPage,
  DetailPostPage,
} from "../pages/index";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/pwFind" element={<PwFindPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/writePage" element={<WritePage />} />
        <Route path="/myBlog" element={<MyBlogPage />} />
        <Route path="/setPage" element={<SetPage />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/detailPostPage/:id" element={<DetailPostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
