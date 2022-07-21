import React from "react";
import {AllRoutes} from "./AllRoutes/AllRoutes"
import  Login  from "./Login/Login";
import Forums from "./components/Forums";
import About from "./components/About";
function App() {
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      <AllRoutes/>
    </div>
  );
}

export default App;
