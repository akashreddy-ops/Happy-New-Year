// Countdown Timer
function countdown() {
    const newYear = new Date('January 1, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = newYear - now;

    if (timeLeft > 0) {
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        document.getElementById('timer').innerHTML = "🎆 Happy New Year! 🎆";
    }
}

// Update timer every second
setInterval(countdown, 1000);
