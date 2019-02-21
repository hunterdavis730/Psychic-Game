const computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;

const lettersGuessed = [];

var guessesLeft = 8;

const computerLetter = computerChoices[(Math.floor(Math.random() * computerChoices.length))];


document.onkeyup = function (event) {
    const userGuess = event.key.toLowerCase();

    document.getElementById('remaining').textContent = `Guesses Left: ${guessesLeft}`;


    for (i = 0; lettersGuessed.length < 9; i++) {


        guessesLeft--;
        lettersGuessed.push(userGuess);
        console.log(guessesLeft)
        console.log(lettersGuessed.length)



        if (guessesLeft === -1) {
            document.getElementById('Guesses').textContent = `Your Guesses so Far: ${lettersGuessed.toString(' ')}  `;



            return confirm('Game Over. Play Again?');

        } else {
            return document.getElementById('Guesses').textContent = `Your Guesses so Far: ${lettersGuessed.toString(' ')}  `;
        }







    }







}