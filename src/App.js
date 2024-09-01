import "./style.scss"

//Importing the needed react functions
import { useState } from "react";

//Importing the neccesary components
import Home from "./Components/Home";
import Photos from "./Components/Photos"
import Download from "./Components/Download"
import Information from "./Components/Information"

function App() {

  //Storing the current screen that we are on
  const [currentScreen,setCurrentScreen] = useState("Home")

  return (
    <div className="App">
      {currentScreen == "Home" ? <Home setCurrentScreen={(screen) => setCurrentScreen(screen)}/> : <div style={{display:"none"}}></div>}
      {currentScreen == "Photos" ? <Photos setCurrentScreen={(screen) => setCurrentScreen(screen)}/> : <div style={{display:"none"}}></div>}
      {currentScreen == "Download" ? <Download setCurrentScreen={(screen) => setCurrentScreen(screen)}/> : <div style={{display:"none"}}></div>}
      {currentScreen == "Information" ? <Information setCurrentScreen={(screen) => setCurrentScreen(screen)}/> : <div style={{display:"none"}}></div>}
    </div>
  );
}

export default App;
