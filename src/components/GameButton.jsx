export default function GameButton({ gameMode, onClick }) {
    return (
        <button className="buttonTest" data-button={gameMode}  onClick={onClick}>{gameMode}</button>
    )
}