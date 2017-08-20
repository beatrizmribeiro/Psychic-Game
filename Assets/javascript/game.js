

var computerChoices = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w","y", "x", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var yourGuesses = [];
var letterToGuess = null



 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


 var updateGuessesLeft = function() {
   
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

var updateletterToGuess = function(){

	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
	};

	var updateGuessesSoFar = function() { 
    document.querySelector("#yourGuesses").innerHTML = "Your Guesses So Far: " + yourGuesses.join(', ');
}



var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    yourGuesses = [];
    updateletterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}



	document.onkeyup = function(event) {
	  guessesLeft -- ;
    	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();



		yourGuesses.push(userGuess);
    		updateGuessesLeft();
    		updateGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess === letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("Good job!");
            reset();
        }

 }   else if (guessesLeft === 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Sorry, maybe try again?");
        reset();
    }

}

