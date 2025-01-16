export default function flipCard(setIsFlipped, flipToBack = true, delay = 100) {
    setTimeout(() => {
        setIsFlipped(flipToBack);
    }, delay);
}