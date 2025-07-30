/*make number regenarate and clean up code */

/* Create the random number and store it. 

Set attempts counter = 0.

Use a loop (up to 10 times).

Inside the loop:

Get the player guess (use your input function).

Increase attempts.

Check the guess vs random number.

If correct, break out.

After the loop, print win/lose message and attempts used. */


alert("Hello World! I want to play a game with you. I will guess number between 1 and 100 and you will need to guess it. You will be given only 10 attempts to guess it. 🤖");
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
let correctNumber = generateRandomNumber();
//console.log("Secret number:", correctNumber);

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

const checkGuess = (guess, correctNumber) => {
  if (guess < correctNumber) {
    return "Too low";
  } else if (guess > correctNumber) {
    return "Too high";
  } else {
    return "Correct";
  }
};

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

const resumeGame = () => {
  while (true){
  let choice = prompt ("Would you like to resume the game ? Please, answer yes or no 🤖")
  cleanChoice = choice?.toLocaleLowerCase();
  if (cleanChoice === "yes") {
    correctNumber = generateRandomNumber ();
    game ();
  }else if (cleanChoice === "no"){
    alert ("Thank you! Byeeee! 👋");
    break;
  }else if (choice === null) {
    alert("Thank you! Byeeee! 👋")
    break;
  }
  else {
    alert("Invalid Input! Please, eneter yes or no");
  }
}
} 

while (true) {
  userChoice = prompt("Let's play ? Please, answer yes or no 🤖");
  let cleanUserChoice = userChoice?.toLocaleLowerCase();
if (userChoice === null) {
  alert("Thank you! Byeeee 👋");
  break;
}
else if (cleanUserChoice === "yes") {
  game ();
  resumeGame();
  break;
}else if (cleanUserChoice === "no"){
  alert("Thank you! Byeeee 👋");
  break;
}else {
  alert("Invalid Input! Please, eneter yes or no");
}
}





