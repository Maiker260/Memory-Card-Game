import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import FooterComp from "./components/footer/FooterComp";
import getChampsInfo from "./components/utils/getChampsinfo";
import selectCharacters from "./components/utils/selectCharacters";
import changeGameMode from "./components/utils/changeGameMode";
import DisplayCurrentContent from "./components/content/DisplayCurrentContent";
import imagePreloader from "./components/utils/imagePreloader";
import VictoryModal from "./components/content/VictoryModal";
import gameModeScores from "./components/utils/gameModeScores";

import '../src/App.css'

export default function App() {

  const [characters, setCharacters] = useState({});
  const [charactersSelected, setCharactersSelected] = useState([]);
  const [charactersAlreadyClicked, setCharactersAlreadyClicked] = useState([]);
  const [gameMode, setGameMode] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [showVictoryModal, setShowVictoryModal] = useState(false);

  useEffect(() => {
    async function fetchCharacterData() {
      const data = await getChampsInfo();
      setCharacters(data);

      const allCharacters = Object.keys(data);
      imagePreloader(allCharacters);
    }
    fetchCharacterData()
  }, [])

  useEffect(() => {
    if (score === gameModeScores[gameMode]) {
      setShowVictoryModal(true);
    }
  }, [score]);

  const handleRestart = () => {
    setScore(0);
    setIsGameActive(false);
    setShowVictoryModal(false);
  };

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
        <VictoryModal
          isOpen={showVictoryModal}
          onClose={handleRestart}
          score={score}
          highScore={highScore}
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