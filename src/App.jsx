import { useState, useEffect } from "react";
import Header from "./components/header/header";
import CardGameContainer from "./components/content/CardGameContainer";
import FooterComp from "./components/footer/FooterComp";
import getChampsInfo from "./components/getChampsinfo";
import selectCharacters from "./components/selectCharacters";
import GameButton from "./components/GameButton";
import changeGameMode from "./components/changeGameMode";

import '../src/App.css'

export default function App() {

  const [characters, setCharacters] = useState({});
  const [charactersSelected, setcharactersSelected] = useState([]);
  const [charactersUsedInGame, setCharactersUsedInGame] = useState(charactersSelected);
  const [gameMode, setGameMode] = useState('Easy');
  const [score, setScore] = useState('2');
  const [highScore, setHighScore] = useState('5');


  useEffect(() => {
    async function fetchCharacterData() {
      const data = await getChampsInfo();
      setCharacters(data);
    }
    fetchCharacterData()
  }, [])

  const buttonHandlers = {
    gameMode: (e) => changeGameMode(e, setGameMode, selectCharacters, characters, setcharactersSelected)
  }

  return (
    <section className="hero flex">
      <div className="content">
        <Header 
          score={score} 
          highScore={highScore}/>
        <CardGameContainer 
          data={ charactersSelected } 
        />
        <div className="buttons flex">
          <GameButton gameMode={'Easy'} onClick={buttonHandlers.gameMode}/>
          <GameButton gameMode={'Medium'} onClick={buttonHandlers.gameMode}/>
          <GameButton gameMode={'Expert'} onClick={buttonHandlers.gameMode}/>
        </div>
        <FooterComp 
          score={score} 
          gameMode={gameMode}/>
      </div>
    </section>
  )

}