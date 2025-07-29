console.log("Hello World!");
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const correctNumber = generateRandomNumber();
console.log("Secret number:", correctNumber);

const getPlayerGuess = () => {
  for (let i = 0; i < 3; i++) {
    const userInput = prompt(
      "Let´s Play! Please,enter number between 01 and 100:"
    );
    const guess = parseInt(userInput, 10);

    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
      return guess;
    } else {
      alert(
        `Invalid input! You have ${
          2 - i
        } attempts left. Please enter a number between 1 and 100.`
      );
    }
  }
  alert("Sorry, you,ve used all 3 attempts");
  return null;
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

    if (guess === null) {
      alert("No valid guess entered. Game over.");
      break;
    }
    const result = checkGuess(guess, correctNumber);
    const attemptsLeft = 10 - attempt;
    //alert(result);
    //console.log(result);

    if (result !== "Correct") {
      alert(`${result}. You have ${attemptsLeft} attempts left.`);
    } else {
      alert(`Congrats! 🎉 You guessed it in ${attempt + 1} attempts!`);
      break;
    }

    if (attempt === 9) {
      alert("You’ve used all 10 attempts.");
      alert(`The correct number was ${correctNumber}`);


/* Create the random number and store it. 

Set attempts counter = 0.

Use a loop (up to 10 times).

Inside the loop:

Get the player guess (use your input function).

Increase attempts.

Check the guess vs random number.

If correct, break out.

After the loop, print win/lose message and attempts used. */

