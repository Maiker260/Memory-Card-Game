import randomizeCharacterSelection from "./randomizeCharacterSelection";
import gameModeScores from "./gameModeScores";

export default function selectCharacters(gameMode, characters, setcharactersSelected) {
    let times = gameModeScores[gameMode]    
    randomizeCharacterSelection(characters, setcharactersSelected, times)
}