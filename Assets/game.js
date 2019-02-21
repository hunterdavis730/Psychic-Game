const computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;

var lettersGuessed = [];

var guessesLeft = 8;

var computerLetter = computerChoices[(Math.floor(Math.random() * computerChoices.length))];

var pickLetter = function () {
    return computerLetter = computerChoices[(Math.floor(Math.random() * computerChoices.length))];
}

document.onkeyup = function (event) {
    const userGuess = event.key.toLowerCase();



    document.getElementById('remaining').textContent = `Guesses Left: ${guessesLeft}`;

    document.getElementById('winLine').textContent = `Wins: ${wins}`;
    document.getElementById('lossLine').textContent = `Losses: ${losses}`;


    for (i = 0; lettersGuessed.length < 9; i++) {


        guessesLeft--;
        lettersGuessed.push(userGuess);
        console.log(computerLetter)
        console.log(wins);

        if (userGuess === computerLetter) {
            wins++;
            lettersGuessed = [];
            alert('That is right! I was thinking of ' + computerLetter.toString().toUpperCase());
            pickLetter();
            return guessesLeft = 8;

        } else if (guessesLeft === -1) {
            document.getElementById('Guesses').textContent = `Your Guesses so Far: ${lettersGuessed.toString(' ')}  `;
            losses++;
            var gameOver = confirm('Game Over. Play Again?');

        } else {
            return document.getElementById('Guesses').textContent = `Your Guesses so Far: ${lettersGuessed.toString(' ')}  `;
        };

        if (gameOver === true) {
            lettersGuessed = [];
            pickLetter();
            return guessesLeft = 8;
        }



    }
    console.log(wins);
}