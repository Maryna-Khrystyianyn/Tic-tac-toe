import { useState } from "react";
import "./App.css";

import Game from "./components/Game";
import StartScreen from "./components/StartScreen";

function App() {
  const[gameMode, setGameMode]= useState(null)

  return (
    <div>
      {
        !gameMode?(<StartScreen onSelect={setGameMode}/>):(<Game gameMode={gameMode}/>)
      }
     
    </div>
  );
}

export default App;
