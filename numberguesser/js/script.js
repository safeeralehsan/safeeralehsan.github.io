let low = 1;
let high = 10;
let randomInt = getRandomInt(10)+1;
let numGuess = 3;

//Setting up HTML elements
let guessInput = document.getElementById('guess');
let guessFeedback = document.getElementById('guessFeedback');
let guessCounter = document.getElementById('guessCounter');
let tryAgain = document.getElementById('reloadPage');

//Setting up Even Listeners
guessInput.addEventListener('keypress', guessCheck);
tryAgain.addEventListener('click', reloadPage);

//Initialising Guess Counter Field
guessCounter.innerHTML = `${numGuess}`;

//Setting up Functions
///Random Number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function guessCheck(e){
    if (e.key === "Enter"){
        if(guessInput.value){
            let input = parseInt(guessInput.value);
            if(input<1 || input>10){
                guessFeedback.innerHTML = 'Guess needs to be between 1 and 10'
            } else if (input<randomInt){
                guessFeedback.innerHTML = 'Try higher';
                numGuess -=1;
                guessCounter.innerHTML = `${numGuess}`;
            } else if (input>randomInt) {
                guessFeedback.innerHTML = 'Try lower';
                numGuess -=1;
                guessCounter.innerHTML = `${numGuess}`;
            } else {
                guessFeedback.innerHTML = 'You guessed right!';
                guessInput.disabled = true;
                tryAgain.setAttribute('style', 'display:on; width:30%; margin: 0% 35% 0% 35%;')
            }
            if (numGuess==0) {
                guessInput.disabled = true;
                guessFeedback.innerHTML = `You couldn't guess the number :(<br> It was ${randomInt}<br>Reset to play again`;
                tryAgain.setAttribute('style', 'display:on; width:30%; margin: 0% 35% 0% 35%;')
            }
        }
    }
}

function reloadPage(){
    window.location.reload();
}
