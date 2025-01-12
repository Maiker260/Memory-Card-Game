import randomizeCharacterSelection from "./randomizeCharacterSelection";

export default function selectCharacters(gameMode, characters, setcharactersSelected) {
    const modes = {
        Easy: 5,
        Medium: 10,
        Expert: 15,
    }

    let times = modes[gameMode]

    randomizeCharacterSelection(characters, setcharactersSelected, times)
}