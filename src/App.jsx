import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import FooterComp from "./components/footer/FooterComp";
import getChampsInfo from "./components/getChampsinfo";
import selectCharacters from "./components/selectCharacters";
import changeGameMode from "./components/changeGameMode";
import DisplayCurrentContent from "./components/content/DisplayCurrentContent";
import imagePreloader from "./components/utils/imagePreloader";

import '../src/App.css'

export default function App() {

  const [characters, setCharacters] = useState({});
  const [charactersSelected, setCharactersSelected] = useState([]);
  const [charactersAlreadyClicked, setCharactersAlreadyClicked] = useState([]);
  const [gameMode, setGameMode] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  useEffect(() => {
    async function fetchCharacterData() {
      const data = await getChampsInfo();
      setCharacters(data);

      const allCharacters = Object.keys(data);
      imagePreloader(allCharacters);
    }
    fetchCharacterData()
  }, [])

  const buttonHandlers = {
    gameMode: (e) => changeGameMode(
      e, 
      setGameMode, 
      selectCharacters, 
      characters, 
      setCharactersSelected, 
      isGameActive, 
      setIsGameActive
    )
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
          charactersSelected={charactersSelected}
          setCharactersSelected={setCharactersSelected}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          buttonHandlers={buttonHandlers.gameMode}
          gameMode={gameMode}
          isGameActive={isGameActive}
          setIsGameActive={setIsGameActive}
          charactersAlreadyClicked={charactersAlreadyClicked}
          setCharactersAlreadyClicked={setCharactersAlreadyClicked}
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