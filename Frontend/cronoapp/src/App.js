import React from "react";
import {AllRoutes} from "./AllRoutes/AllRoutes";
import  Login  from "./Login/Login";
import Forums from "./components/Forums";
import About from "./components/About";
import HomePage from "./components/HomePage";
import OTherFooter from "./components/OTherFooter";

function App() {
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      {/* <AllRoutes/> */}
      {/* <About/> */}
      <OTherFooter/>
    </div>
  );
}

export default App;
