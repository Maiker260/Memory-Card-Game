import '../../styles/content/CardGameContainer.css'

export default function CardGameContainer({ data }) {
    return (
        <section className='main_content'>
            <div className='cards_container grid'>
                {data.map(character => (
                    <img className='card' key={character} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${character}_0.jpg`} alt={`${character}SplashArt`} />
                ))}
            </div>
        </section>
    )
}