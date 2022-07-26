import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Bolgs from "../components/Bolgs";
import Forums from "../components/Forums";
import HomePage from "../components/HomePage";
import Login from "../Login/Login";
import Support from "../components/Support";
import { UserMainPage } from "../Component/userdashboard/Mainpage";
import { Diary } from "../Component/userdashboard/Diary";
// import { Home } from '../Login/Home';
import Signup from "../Login/Signup";
import { Settings } from "../Component/userdashboard/Settings";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/support" element={<Support />} />
      <Route path="/blog" element={<Bolgs />} />
      <Route path="/forum" element={<Forums />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user/" element={<UserMainPage />}>
        <Route path="diary" element={<Diary />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
