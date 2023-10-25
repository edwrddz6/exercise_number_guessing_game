// Number Guessing Game 

/* - Build a number guessing game where the user inputs a number within a given range, 
        and determine whether they guessed the correct number. 
      Use a while loop to keep asking for the user’s guess until they guess the correct number. 
    - Use html page with js 
    - Use prompt to get user’s input 
    - Be sure to use parseInt() to convert the user input from a string to a number */


// Parameters - User inputs a number when we PROMPT them to. parseInt() needs to be included in case they type out their response. 
//              The number they choose must be within a given range that we choose. If not, it will prompt them again.
// Results - User will receive message when they guess the correct number.
// Examples - We choose '6' as the winning number and give user the number range to guess from. If they guess it correctly, console 
//              will alert 'You guess it right!'. If not, they will receive alert 'You failed, want to try again?'
// Pseudocode - I will create a html button to initiate PROMPT. I will use a WHILE loop to keep asking the user to guess until 
//              they guess the correct number. I will add an ALERT with a message if they guess it correctly. 


let button = document.getElementById("button");

button.addEventListener("click", function () {
  while (true) {
    let userInput = parseInt(prompt("Enter a Number"));

    if (userInput === 6) {
      alert("You got it! It was 6!");
      break;
    } else if (userInput !== 6) {
      alert("Sorry, try again!");
    }
  }
});