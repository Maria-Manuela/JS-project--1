console.log("Hello World!");

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
let correctlyGuessedNumber = generateRandomNumber();
//
//console.log(correctlyGuessedNumber);

let userGuessedNumber;

const getPlayerGuess = () => {
  userGuessedNumber = prompt("Please,enter number between 01 and 100");
  return parseInt(userGuessedNumber);
};
//getPlayerGuess();
//console.log(userGuessedNumber);

const checkGuess = (correctlyGuessedNumber, userGuessedNumber) => {
  //console.log(correctlyGuessedNumber, userGuessedNumber);
  if (correctlyGuessedNumber === userGuessedNumber) {
    console.log("Congrats! You guessed the number");
  } else if (correctlyGuessedNumber < userGuessedNumber) {
    console.log("Ups! You didn't guess the number. Try again");
  } else if (correctlyGuessedNumber > userGuessedNumber) {
    console.log("Ups! You didn't guess the number. Try again");
  }
};

//checkGuess(correctlyGuessedNumber, userGuessedNumber);

const game = () => {
  generateRandomNumber();
  console.log(correctlyGuessedNumber);

  let totalAttempts = 10;

  for (let attempt = 0; attempt < totalAttempts; attempt++) {
    //console.log(correctlyGuessedNumber, userGuessedNumber);
    if (correctlyGuessedNumber === userGuessedNumber) {
      console.log("End of The Game! You won!");
      break;
    } else {
      getPlayerGuess();
      console.log(userGuessedNumber);
      //console.log(userGuessedNumber);
      checkGuess(correctlyGuessedNumber, userGuessedNumber);
    }
  }
};

game();
