import { useState, useEffect } from "react";
import getChampsInfo from "./getChampsinfo";

export default function testing() {

  const [characters, setCharacters] = useState({});
  const [charactersSelected, setcharactersSelected] = useState([]);

  useEffect(() => {
    async function fetchCharacterData() {
      const data = await getChampsInfo();
      setCharacters(data);
    }
    fetchCharacterData()
  }, [])

  function selectCharacters() {
    setcharactersSelected(
      Object.keys(characters).filter(
        character => character === "Vayne"|| character === "Aatrox" || character === "Ahri"
      )
    )
  }

  return (
    <div>
      <ul>
        {charactersSelected.map(pj => (
          <li key={pj}>{pj}</li>
        ))}
      </ul>
      <div>
        {charactersSelected.map(pj => (
          <img key={pj} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${pj}_0.jpg`} alt={`${pj}SplashArt`} />
        ))}
      </div>
      <button onClick={selectCharacters}>Click Me</button>
    </div>
  )

}