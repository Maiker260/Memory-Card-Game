import GameButton from "../GameButton"

export default function MainScreen({ onClick }) {
    return (
        <section className="main_Screen">
            <div className="buttons flex">
                <GameButton gameMode={'Easy'} onClick={onClick}/>
                <GameButton gameMode={'Medium'} onClick={onClick}/>
                <GameButton gameMode={'Expert'} onClick={onClick}/>
            </div>
        </section>
    )
}