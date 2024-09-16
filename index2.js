/*
2.Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.
*/

let delayInSeconds = 3; // You can modify this value to change the delay

function getRandomNumber() {
    return Math.floor(Math.random() * 100); // Random number between 0 and 99
}

function startCountdown() {
    let remainingTime = delayInSeconds;

    let countdownInterval = setInterval(() => {
        if (remainingTime > 0) {
            console.log(`Time remaining: ${remainingTime} seconds`);
            remainingTime--;
        } else {
            clearInterval(countdownInterval);
            let randomNumber = getRandomNumber();
            console.log(`Generated random number: ${randomNumber}`);
        }
    }, 1000); // 1-second interval for the countdown
}

startCountdown();
