import React from "react";
import {AllRoutes} from "./AllRoutes/AllRoutes"
import {UserMainPage} from "./Component/userdashboard/Mainpage"

function App() {
  return (
    <div className="App" style={{backgroundColor:"white"}}>
      {/* <UserMainPage/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
