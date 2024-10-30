import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  SignUpPage,
  PwFindPage,
  HomePage,
  MyPage,
  WritePage,
  MyBlogPage,
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
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
