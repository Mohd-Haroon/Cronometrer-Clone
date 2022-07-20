import React from "react";
import { Routes, Route } from "react-router-dom";
import {UserMainPage} from "../Component/userdashboard/Mainpage"
import {Diary} from "../Component/userdashboard/Diary";

export const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/user/" element={<UserMainPage/>} >
          <Route path="diary" element={<Diary/>} />
        </Route>
      </Routes>
    );
  };
  