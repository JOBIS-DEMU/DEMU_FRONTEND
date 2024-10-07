import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
import SignUp from "../pages/signUp";
import PwChange from "../pages/pwChange";
import PwFind from "../pages/pwFind";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/pwFind" element={<PwFind />} />
        <Route path="/pwChange" element={<PwChange />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
