import '../../styles/content/GameButton.css'

export default function GameButton({ gameMode, onClick }) {
    return (
        <button className="game_mode_button" data-button={gameMode}  onClick={onClick}>{gameMode}</button>
    )
}