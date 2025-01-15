export default function resetGame(setIsGameActive, setCharactersSelected, setCharactersAlreadyClicked, setScore ) {
    setIsGameActive(false)
    setCharactersSelected([]);
    setCharactersAlreadyClicked([]);
    setScore(0);
}