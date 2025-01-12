export default function randomizeCharacterSelection(characters, setcharactersSelected, times) {
  const shuffle = [...Object.keys(characters)].sort(() => Math.random() - 0.5)
  const selected = shuffle.slice(0, times)

  setcharactersSelected(selected)
}