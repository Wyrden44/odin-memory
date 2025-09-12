import { useState } from 'react'
import './styles/App.css'
import "./styles/game.css"
import Game from './components/Game'
import SelectDifficulty from './components/SelectDifficulty';

function App() {
  const [screen, setScreen] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");

  function onDifficultySelect(diff) {
    switch (diff) {
      case "easy":
        setDifficulty("easy");
        break;
      case "medium":
        setDifficulty("medium");
        break;
      case "hard":
        setDifficulty("hard");
        break;
      default:
        break;
    }
    setScreen(1);
  }
  
  if (screen == 0) {
    return (
      <>
        <SelectDifficulty onDifficultySelect={onDifficultySelect}/>
      </>
    )
  }
  else {
    return (
      <>
        <Game difficulty={difficulty}/>
      </>
    )
  }
}

export default App
