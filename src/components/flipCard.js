export default function flipCard(setIsFlipped, flipToBack = true, delay = 200) {
    setTimeout(() => {
        setIsFlipped(flipToBack);
    }, delay);
}