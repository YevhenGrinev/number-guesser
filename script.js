let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (Math.abs(humanGuess - targetGuess) > Math.abs(computerGuess - targetGuess)) {
        return false;
    }
    else if (Math.abs(humanGuess - targetGuess) < Math.abs(computerGuess - targetGuess) || 
    Math.abs(humanGuess - targetGuess) === Math.abs(computerGuess - targetGuess)) {
        return true;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore ++;
    }
    else if (winner === 'computer') {
        computerScore ++;
    }
}


const advanceRound = () => {
    currentRoundNumber++;   
}


