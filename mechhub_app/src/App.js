import React from "react";
import NavBar from "./Components/NavBar";
import Robot from "./Components/Robot"
import GradientCircle from "./Components/GradientCircle";
import './Styles/App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Robot/>
      <GradientCircle/>
    </div>
  );
}

export default App;
