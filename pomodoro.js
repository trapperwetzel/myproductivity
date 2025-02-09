const startBtn = document.querySelector('.btn-start'); // Selecting start button
const minutesInput = document.querySelector('.minutes');
const secondsInput = document.querySelector('.seconds');
let myInterval;

const appTimer = () => {
    let minutes = parseInt(minutesInput.value) || 0; // Convert input values to numbers
    let seconds = parseInt(secondsInput.value) || 0; 

    let totalSeconds = minutes * 60 + seconds;

    if (totalSeconds <= 0) {
        alert('Please enter a valid time.');
        return;
    }

    // Clear any existing interval if the timer is restarted
    if (myInterval) {
        clearInterval(myInterval);
    }

    const updateSeconds = () => {
        if (totalSeconds <= 0) {
            clearInterval(myInterval);
            return;
        }

        totalSeconds--;

        let minutesLeft = Math.floor(totalSeconds / 60);
        let secondsLeft = totalSeconds % 60;

        minutesInput.value = minutesLeft;
        secondsInput.value = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    };

    myInterval = setInterval(updateSeconds, 1000);
};

// Attach event listener to the start button
startBtn.addEventListener('click', appTimer);
