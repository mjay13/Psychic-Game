//letter choices for computer
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//start all settings at zero
var wins = 0;
var losses = 0;
var guesses = 12;
var guessesLeft = 12;
var guessedLetters = [ ];
var letterToGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
//how to make only the alpabet count as a guess and not other characters? doesn't work (above)



//computer selects one random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//user has 12 guesses
// guesses = guesses || 12
var updateGuessesLeft = function() {
  // html guesses left insert
  document.querySelector('#guessLeft').innerHTML = "remaining guesses: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // display letters guessed 
  document.querySelector('#soFar').innerHTML = "your guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 12; //total guess test
  guessesLeft = 12; //total guess left test
  guessedLetters = []; // letter guessed

  updateLetterToGuess(); // update of variables
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();


//starts when user key is released
document.onkeyup = function(event) {
    
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();
//how to make only one letter count once even if it is pressed multiple times?
        if (guessesLeft > 0){ 
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "wins: " + wins;
                alert("look who's psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // loser, add to losses 
            losses++;
            document.querySelector('#losses').innerHTML = "losses: " + losses;
            alert("sorry to dissapoint, but you're not psychic; maybe try again?");
            // reset after either 
            reset();
        }
};