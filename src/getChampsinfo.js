export default async function getChampsInfo() {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/15.1.1/data/en_US/champion.json').then(response => response.json())

    console.log("Getting Data")
    return response.data;

}