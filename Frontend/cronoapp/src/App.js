import React from "react";
import {AllRoutes} from "./AllRoutes/AllRoutes";
import  Login  from "./Login/Login";
import Forums from "./components/Forums";
import About from "./components/About";
import HomePage from "./components/HomePage";
import OTherFooter from "./components/OTherFooter";
import Support from "./components/Support";
import Blogs from "./components/Bolgs";
function App() {
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      <AllRoutes/>
      {/* <About/> */}
      {/* <OTherFooter/> */}
      {/* <Support/> */}
      {/* <Blogs/> */}
    </div>
  );
}

export default App;
