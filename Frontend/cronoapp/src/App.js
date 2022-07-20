import React from "react";
import "./App.css";
import {AllRoutes} from "./AllRoutes/AllRoutes"
import  Login  from "./Login/Login";



function App() {
  return (
    <div className="App">
      <h1>cronometer.com</h1>
      <AllRoutes/>
      <Login/>
    </div>
  );
}

export default App;
