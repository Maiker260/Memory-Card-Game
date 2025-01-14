export default function changeGameMode(e, setGameMode, selectCharacters, characters, setcharactersSelected, isGameActive, setIsGameActive) {
    setIsGameActive(!isGameActive)
    const target = e.target.dataset.button;
    setGameMode(target)
    selectCharacters(target, characters, setcharactersSelected)
}