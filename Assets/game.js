const computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;

var lettersGuessed = [];

var guessesLeft = 9;

var computerLetter = computerChoices[(Math.floor(Math.random() * computerChoices.length))];

var pickLetter = function () {
    return computerLetter = computerChoices[(Math.floor(Math.random() * computerChoices.length))];
}

var printInfo = function () {
    document.getElementById('remaining').textContent = `Guesses Left: ${guessesLeft}`;

    document.getElementById('winLine').textContent = `Wins: ${wins}`;
    document.getElementById('lossLine').textContent = `Losses: ${losses}`;
    document.getElementById('Guesses').textContent = `Your Guesses so Far: ${lettersGuessed}`;

}

document.onkeyup = function (event) {
    const userGuess = event.key.toLowerCase();

    guessesLeft--;
    lettersGuessed.push(userGuess);




    for (i = 0; lettersGuessed.length < 10; i++) {



        console.log(computerLetter)


        if (userGuess === computerLetter) {
            wins++;

            guessesLeft = 9;

            alert('That is right! I was thinking of ' + computerLetter.toString().toUpperCase());
            lettersGuessed = [];
            printInfo();
            pickLetter();



        } else if (guessesLeft === 0) {
            losses++;
            lettersGuessed = [];
            guessesLeft = 9;
            printInfo();
            var gameOver = confirm('Game Over. Play Again?');

        } else {
            return printInfo();
        };

        if (gameOver === true) {

            pickLetter();


        }



    }

}