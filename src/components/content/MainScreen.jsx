import GameButton from "../GameButton"

import '../../styles/content/MainScreen.css'

export default function MainScreen({ onClick }) {
    return (
        <section className="main_screen flex">
            <div className="main_title_container">
                <h1 className="main_title">MEMORY CARD GAME</h1>
            </div>
            <div className="buttons flex">
                <GameButton gameMode={'Easy'} onClick={onClick}/>
                <GameButton gameMode={'Medium'} onClick={onClick}/>
                <GameButton gameMode={'Expert'} onClick={onClick}/>
            </div>
        </section>
    )
}