// nested if else

// Building a Game
// logic
// winning number = 101;
// 101 you guess is right
// 98 too low
// 120 too high

const prompt = require("prompt-sync")();
// start

let winningNumber = 101;
let userGuess = +prompt("\nGuess a Number"); // always take input in "string"
// console.log(typeof userGuess,userGuess);

if (userGuess === winningNumber) {
  console.log("Your Guess is Right :)");
} else {
  if (userGuess > winningNumber) {
    12;
    console.log("Your Guess is too High!!");
  } else {
    console.log("Your Guess is too low!!");
  }
}
