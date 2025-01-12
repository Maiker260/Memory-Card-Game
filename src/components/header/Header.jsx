import '../../styles/header/Header.css'

export default function Header({ score, highScore }) {
    return (
        <section className="header flex">
          <div className="logo-container">
            <img src="../src/assets/lolitoLogo.webp" alt="Logo" height='170px'/>
          </div>
          <div className="scoreboard flex">
            <div className="current-score flex">
              <h3 className="scores scores-titles current-score-title">Score:</h3>
              <p className="scores current-score-value">{score}</p>
            </div>
            <div className="high-score flex">
              <h3 className="scores scores-titles high-score-title">High Score</h3>
              <p className="scores high-score-value">{highScore}</p>
            </div>
          </div>
        </section>
    )
}