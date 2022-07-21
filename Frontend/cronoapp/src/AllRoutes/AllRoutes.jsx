import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Bolgs from "../components/Bolgs";
import Forums from "../components/Forums";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Support from "../components/Support";
import {UserMainPage} from "../Component/userdashboard/Mainpage"
import {Diary} from "../Component/userdashboard/Diary";

export const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/support" element={<Support/>}/>
        <Route path="/blog" element={<Bolgs/>}/>
        <Route path="/forum" element={<Forums/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<HomePage/>}/>
        <Route path="/user/" element={<UserMainPage/>} >
          <Route path="diary" element={<Diary/>} />
        </Route>
      </Routes>
    );
  };
  