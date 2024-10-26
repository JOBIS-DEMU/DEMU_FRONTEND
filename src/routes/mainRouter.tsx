import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  SignUp,
  PwFind,
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
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/pwFind" element={<PwFind />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/writePage" element={<WritePage />} />
        <Route path="/myBlog" element={<MyBlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
