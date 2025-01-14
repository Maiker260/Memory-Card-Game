import { useState, useEffect } from "react";
import Header from "./components/header/header";
import FooterComp from "./components/footer/FooterComp";
import getChampsInfo from "./components/getChampsinfo";
import selectCharacters from "./components/selectCharacters";
import changeGameMode from "./components/changeGameMode";
import DisplayCurrentContent from "./components/content/displayCurrentContent";

import '../src/App.css'

export default function App() {

  const [characters, setCharacters] = useState({});
  const [charactersSelected, setcharactersSelected] = useState([]);
  const [charactersUsedInGame, setCharactersUsedInGame] = useState(charactersSelected);
  const [gameMode, setGameMode] = useState('Easy');
  const [score, setScore] = useState('2');
  const [highScore, setHighScore] = useState('5');
  const [isGameActive, setIsGameActive] = useState(false);

  useEffect(() => {
    async function fetchCharacterData() {
      const data = await getChampsInfo();
      setCharacters(data);
    }
    fetchCharacterData()
  }, [])

  const buttonHandlers = {
    gameMode: (e) => changeGameMode(e, setGameMode, selectCharacters, characters, setcharactersSelected, isGameActive, setIsGameActive)
  }

  return (
    <section className="hero flex">
      <div className="content">
        <Header 
          score={score} 
          highScore={highScore}
          isGameActive={isGameActive}
        />
        <DisplayCurrentContent 
          data={charactersSelected}
          buttonHandlers={buttonHandlers.gameMode}
          isGameActive={isGameActive}
        />
        <FooterComp 
          score={score} 
          gameMode={gameMode}
          isGameActive={isGameActive}
        />
      </div>
    </section>
  )
}