document.addEventListener('DOMContentLoaded', () => {
    const pond = document.querySelector('.pond');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');
    let score = 0;
    let timeLeft = 30;

    // Function to create a fish element
    function createFish() {
        const fish = document.createElement('div');
        fish.className = 'fish';
        fish.style.left = `${Math.random() * 550}px`; // randomize initial position
        fish.style.backgroundImage = `url('fish.png')`; // replace with your fish image
        fish.dataset.value = Math.random() < 0.5 ? 2 : 5; // 50% chance for black or golden fish
        pond.appendChild(fish);

        fish.addEventListener('click', () => {
            score += parseInt(fish.dataset.value);
            scoreDisplay.textContent = score;
            pond.removeChild(fish);
        });
    }

    // Function to handle game timer
    function startTimer() {
        const timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert(`Game over! Your score is ${score}`);
                // You can add more logic here for game over state
            }
        }, 1000);
    }

    // Function to periodically create fish
    setInterval(createFish, 2000); // Adjust timing as needed

    // Function to handle bonus fish every 15 seconds
    setInterval(() => {
        const bonusFish = document.createElement('div');
        bonusFish.className = 'fish';
        bonusFish.style.left = `${Math.random() * 550}px`;
        bonusFish.style.backgroundImage = `url('bonus-fish.png')`; // replace with bonus fish image
        bonusFish.dataset.value = 0; // Bonus fish doesn't add score, adjust as needed
        pond.appendChild(bonusFish);

        bonusFish.addEventListener('click', () => {
            timeLeft += 5;
            timerDisplay.textContent = timeLeft;
            pond.removeChild(bonusFish);
        });
    }, 15000);

    // Start the game timer
    startTimer();
});
