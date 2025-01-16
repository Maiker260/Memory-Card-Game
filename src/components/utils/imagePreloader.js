export default function imagePreloader(characters) {
    characters.forEach((character) => {
      const img = new Image();
      img.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${character}_0.jpg`;
    });
}