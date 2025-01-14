import { useState, useRef } from 'react'
import ReactCardFlip from 'react-card-flip'

import '../../styles/content/CardGameContainer.css'
import cardBack from '../../assets/league-of-legends-project-k-card-backs-black-blue-white.webp'

export default function CardGameContainer({ data }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const imgRefs = useRef({});

    function flipCard() {
        setIsFlipped(!isFlipped)
    }

    return (
        <section className='main_content'>
            <div className='cards_container grid'>
                {data.map(character => (
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped} key={character}>
                        <img 
                            ref={(el) => (imgRefs.current[character] = el)} 
                            className='card' 
                            key={character} 
                            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${character}_0.jpg`} 
                            alt={`${character}SplashArt`}
                        />
                        <img 
                            className='card' 
                            key={character} 
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
            <button onClick={flipCard}>CLICK</button>
        </section>
    )
}