import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, SignUp, PwFind, Home, MyPage } from "../pages/index";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/pwFind" element={<PwFind />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
