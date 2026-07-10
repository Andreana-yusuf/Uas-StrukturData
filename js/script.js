function lemparConfetti() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    lemparConfetti();
});

document.getElementById('confettiBtn').addEventListener('click', () => {
    lemparConfetti();
});
