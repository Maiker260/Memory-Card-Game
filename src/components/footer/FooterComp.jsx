import '../../styles/footer/FooterComp.css'
import gameModeScores from '../utils/gameModeScores'

export default function FooterComp({ score, gameMode, isGameActive }) {
  let totalCharacters = gameModeScores[gameMode]

  const footer = isGameActive
    ? <section className="footer">
        <h3 className="counter">{`${score}/${totalCharacters}`}</h3>
      </section>
    : null

  return (
      <>
        {footer}
      </>
  )
}