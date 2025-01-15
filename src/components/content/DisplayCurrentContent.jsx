import CardGameContainer from "./CardGameContainer"
import MainScreen from "./MainScreen"

export default function DisplayCurrentContent({ 
    charactersSelected, 
    setCharactersSelected,
    charactersAlreadyClicked,
    setCharactersAlreadyClicked,
    score,
    setScore,
    highScore,
    setHighScore,
    gameMode,
    buttonHandlers, 
    isGameActive,
    setIsGameActive,
}) {

    const displayContent = isGameActive
        ? <CardGameContainer 
            charactersSelected={charactersSelected}
            charactersAlreadyClicked={charactersAlreadyClicked}
            score={score}
            highScore={highScore}
            gameMode={gameMode}
            setCharactersSelected={setCharactersSelected}
            setCharactersAlreadyClicked={setCharactersAlreadyClicked}
            setScore={setScore}
            setHighScore={setHighScore}
            isGameActive={isGameActive}
            setIsGameActive={setIsGameActive}
          />

        : <MainScreen 
            onClick={buttonHandlers}
          />

    return (
        <>
            {displayContent}
        </>
    )
}