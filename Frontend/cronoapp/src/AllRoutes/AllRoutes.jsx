import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../Login/Home';
import Login from '../Login/Login';
import Signup from '../Login/Signup';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/home' element={<Home />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
};
