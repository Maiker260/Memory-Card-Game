import '../../styles/footer/FooterComp.css'

export default function FooterComp({ score, gameMode, isGameActive }) {
  const modes = {
    Easy: 5,
    Medium: 10,
    Expert: 15,
  }

  let totalCharacters = modes[gameMode]

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