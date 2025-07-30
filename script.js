alert("Hello World! I want to play a game with you. I will guess number between 1 and 100 and you will need to guess it. You will be given only 10 attempts to guess it. 🤖");
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const correctNumber = generateRandomNumber();
console.log("Secret number:", correctNumber);

const getPlayerGuess = () => {
    while (true) {
    const userInput =  prompt(
      "Let´s Play! Please,enter number between 1 and 100:"
    );  
    const guess = parseInt(userInput, 10);
    console.log(guess);
    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
      return guess;
    } else {
     
      alert(
        `Invalid input!  Please enter a number between 1 and 100.`
      );
    }
    }
 
};

/* // call it and log what it returns
const playerGuess = getPlayerGuess();
console.log("Player guess is:", playerGuess); */

const checkGuess = (guess, correctNumber) => {
  if (guess < correctNumber) {
    return "Too low";
  } else if (guess > correctNumber) {
    return "Too high";
  } else {
    return "Correct";
  }
};

/* console.log(checkGuess(10, 20)); // Too low
console.log(checkGuess(33, 10)); // too high
console.log(checkGuess(15, 15)); // Correct */

const game = () => {
  
  for (let attempt = 0; attempt < 10; attempt++) {
    
    const guess = getPlayerGuess();
    const result = checkGuess(guess, correctNumber);
    const attemptsLeft = 9 - attempt;

    if (result !== "Correct") {
      alert(`${result}. You have ${attemptsLeft} attempts left.`);
    } else if (guess === correctNumber){
      alert(`Congrats! 🎉 You guessed it in ${attempt + 1} attempts!`);
      break;
    }

    if (attempt === 9) {
      alert("Game over. You’ve used all 10 attempts.");
      alert(`The correct number was ${correctNumber}`);
    }
  }

}
    
game ();

const resumeGame = () => {
  
  let choice = prompt ("Would you like to resume the game ? 🤖")
  if (choice === "yes") {
    game ();
  }else {
    alert ("Thank you! Byeeee! 👋")
  }
} 

resumeGame();





/* Create the random number and store it. 

Set attempts counter = 0.

Use a loop (up to 10 times).

Inside the loop:

Get the player guess (use your input function).

Increase attempts.

Check the guess vs random number.

If correct, break out.

After the loop, print win/lose message and attempts used. */

