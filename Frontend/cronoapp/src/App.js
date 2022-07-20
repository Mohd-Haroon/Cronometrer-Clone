import React from "react";
import {AllRoutes} from "./AllRoutes/AllRoutes"
import  Login  from "./Login/Login";



function App() {
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      <AllRoutes/>
      <Login/>
    </div>
  );
}

export default App;
