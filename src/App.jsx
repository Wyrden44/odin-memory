import { useState } from 'react'
import './styles/App.css'
import "./styles/game.css"
import Game from './components/Game'
import SelectDifficulty from './components/SelectDifficulty';

function App() {
  const [screen, setScreen] = useState(0);
  
  if (screen == 0) {
    return (
      <>
        <SelectDifficulty onDifficultySelect={() => setScreen(1)}/>
      </>
    )
  }
  else {
    return (
      <>
        <Game />
      </>
    )
  }
}

export default App
