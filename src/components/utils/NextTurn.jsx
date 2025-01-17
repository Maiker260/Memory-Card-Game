import flipCard from "./flipCard";
import resetGame from "./resetGame";

export default function NextTurn(
    e,
    charactersSelected, 
    charactersAlreadyClicked,
    score,
    setIsFlipped,
    setCharactersSelected, 
    setCharactersAlreadyClicked,
    setScore,
    setIsGameActive
) {

    const character = e.target.dataset.name;
    const alreadyClicked = charactersAlreadyClicked.includes(character);


    const startNewGame = () => resetGame(setIsGameActive, setCharactersSelected, setCharactersAlreadyClicked, setScore)

    if (alreadyClicked) {
        alert('You Lose!!!')
        startNewGame()
        return
    }

    flipCard(setIsFlipped)

    setTimeout(() => {     
        setScore(score + 1);

        setCharactersAlreadyClicked((prevState) => ([
            ...prevState, character
        ]));

        const shuffle = (array) => { 
            for (let i = array.length - 1; i > 0; i--) { 
                const j = Math.floor(Math.random() * (i + 1)); 
                [array[i], array[j]] = [array[j], array[i]]; 
            }
            return array; 
        };

        const shuffledList = shuffle([...charactersSelected]);
        setCharactersSelected(shuffledList);

        flipCard(setIsFlipped, false);

    }, 600);
}