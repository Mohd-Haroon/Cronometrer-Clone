import React from "react";
import { Routes, Route } from "react-router-dom";
import {UserMainPage} from "../Component/userdashboard/Mainpage"
import {Diary} from "../Component/userdashboard/Diary";
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Login/Home';
import Login from '../Login/Login';
import Signup from '../Login/Signup';

export const AllRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
        <Route path="/user/" element={<UserMainPage/>} >
          <Route path="diary" element={<Diary/>} />
        </Route>
        
      </Routes>
    );
  };
  

