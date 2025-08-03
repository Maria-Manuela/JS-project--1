alert("Hello World! I want to play a game with you." + 
  "I will guess number between 1 and 100" +
  "and you will need to guess it." + 
  "You will be given only 10 attempts to guess it. 🤖");
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
let correctNumber = generateRandomNumber();

const getPlayerGuess = () => {
    while (true) {
        const userInput = prompt(
            "Let´s Play! Please,enter number between 1 and 100:");

        if (userInput === null) {
          alert("Already giving up? Oh, well! Thank you! Byeeee! 👋");
          return null;
        }    

        const guess = parseInt(userInput, 10);
        console.log(guess);
        if (!isNaN(guess) && guess >= 1 && guess <= 100) {
            return guess;
        } else {
          alert(`Invalid input!  Please enter a number between 1 and 100`);
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
        if (guess === null) {
          return false;
        }

        const result = checkGuess(guess, correctNumber);
        const attemptsLeft = 9 - attempt;

        if (result !== "Correct") {
            alert(`${result}. Your number is: ${guess} You have ${attemptsLeft} attempts left.`);
        } else if (guess === correctNumber) {
            alert(`Congrats! 🎉 You guessed it in ${attempt + 1} attempts!`);
            break;
        }

        if (attempt === 9) {
            alert("Game over. You’ve used all 10 attempts.");
            alert(`The correct number was ${correctNumber}`);
        }
    }
    return true;
}

const resumeGame = () => {
    while (true) {
        let choice = prompt("Would you like to resume the game ? Please, answer yes or no 🤖")
        cleanChoice = choice?.trim().toLocaleLowerCase();
        if (cleanChoice === "yes") {
            correctNumber = generateRandomNumber();
            game();
        } else if (cleanChoice === "no") {
            alert("Thank you! Byeeee! 👋");
            break;
        } else if (choice === null) {
            alert("Thank you! Byeeee! 👋")
            break;
        } else {
            alert("Invalid Input! Please, enter yes or no");
        }
    }
}

while (true) {
    userChoice = prompt("Let's play ? Please, answer yes or no 🤖");
    let cleanUserChoice = userChoice?.toLocaleLowerCase();
    if (userChoice === null) {
        alert("Thank you! Byeeee 👋");
        break;
    } else if (cleanUserChoice === "yes") {
        const finishedNormally = game();
        if (finishedNormally) {
            resumeGame();
        }
        break;
    } else if (cleanUserChoice === "no") {
        alert("Thank you! Byeeee 👋");
        break;
    } else {
        alert("Invalid Input! Please, enter yes or no");
    }
}