import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/loginPage";
import SignUp from "../pages/signUpPage";

import PwFindPage from "../pages/pwFindPage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/pwFind" element={<PwFindPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
