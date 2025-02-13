import React from "react";
import NavBar from "./Components/NavBar";
import Robot from "./Components/Robot"
import GradientCircles from "./Components/GradientCircles";
import './Styles/App.css'

function App() {
  return (
    <div className="App">
      <div className="background">
        <GradientCircles/>
      </div>
      <div className="foreground">
        <NavBar/>
        <Robot/>
      </div>
    </div>
  );
}

export default App;
