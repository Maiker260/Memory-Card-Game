import { useState, useEffect, useRef } from 'react'
import ReactCardFlip from 'react-card-flip'
import NextTurn from '../NextTurn'
import flipCard from '../flipCard'

import '../../styles/content/CardGameContainer.css'
import cardBack from '../../assets/league-of-legends-project-k-card-backs-black-blue-white.webp'

export default function CardGameContainer({ 
    charactersSelected, 
    setCharactersSelected,
    charactersAlreadyClicked,
    setCharactersAlreadyClicked,
    score, 
    setScore, 
    highScore, 
    setHighScore, 
    gameMode,
    setIsGameActive,
}) {

    const [isFlipped, setIsFlipped] = useState(false);
    const imgRefs = useRef({});

    function flipCardsFn () {
        flipCard(setIsFlipped)
        setTimeout(() => flipCard(setIsFlipped, false), 700);
    };

    useEffect(() => {
        if (score > highScore) {
          setHighScore(score);
        }
    }, [score, highScore]);

    const onClick = (e) => NextTurn(
        e,
        charactersSelected,
        charactersAlreadyClicked,
        score,
        gameMode,
        setIsFlipped,
        setCharactersSelected,
        setCharactersAlreadyClicked,
        setScore,
        setIsGameActive,
        setHighScore
    )

    return (
        <section className='main_content'>
            <div className='cards_container grid' onLoad={flipCardsFn}>
                {charactersSelected.map(character => (
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped} key={character}>
                        <img 
                            ref={(el) => (imgRefs.current[character] = el)} 
                            className='card'
                            data-name={character}
                            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${character}_0.jpg`} 
                            alt={`${character}SplashArt`}
                            onClick={onClick}
                        />
                        <img 
                            className='card'
                            src={cardBack} 
                            alt={'cardBack'}
                            style={{
                                height: imgRefs.current[character]?.clientHeight || 'auto',
                                width: imgRefs.current[character]?.clientWidth || 'auto',
                            }}
                        />
                    </ReactCardFlip>
                ))}
            </div>
        </section>
    )
}