let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

// Write your code below:
while (currentRoundNumber < 10) {

  let user = Math.floor(Math.random()* 9);

  const generateTarget = () => {
    digit = Math.floor(Math.random() * 9);
    return digit
  }
  // console.log(generateTarget())
  const target = generateTarget();

  const generateComputerDigit = () => {
    computerDigit = Math.floor(Math.random() * 9);
    return computerDigit
  }

  const computer = generateComputerDigit();

  const compareGuesses = (user, computer, target) => {
    const userDifferent = Math.abs(user - target);
    const computerDifferent = Math.abs(computer - target);
    if (userDifferent === computerDifferent || userDifferent < computerDifferent) {
      console.log(`User won!`)
      return true;
    }
    else {
      console.log(`Computer won!`)
      return false;
    }
  }

  console.log(`User digit: ${user}`);
  // console.log(generateTarget());
  console.log(`target digit: ${target}`);
  // console.log(generateComputerDigit());
  console.log(`computer digit: ${computer}`);
  // console.log(compareGuesses(user, computer, target));

  let result = compareGuesses(user, computer, target);

  const updateScore = (result) => {
    currentRoundNumber +=1;
    switch (result){
      case true:
        humanScore += 1;
        return `Human score: ${humanScore}, computer score: ${computerScore}, current round: ${currentRoundNumber}`
        break;
      case false:
        computerScore += 1;
        return `Human score: ${humanScore}, computer score: ${computerScore}, current round: ${currentRoundNumber}`
        break;
    }
  }
  updatedScoreResult = updateScore(result)
  console.log(updatedScoreResult); 
  console.log("___________________________________________________________");
 
} 

const finalResult = (humanScore, computerScore) => {
  if (humanScore === computerScore) {
    console.log('Final result: DRAW')
  }
  else if (humanScore > computerScore) { 
    console.log('Final result: USER WON')     
  }
  else { 
    console.log('Final result: COMPUTER WON')     
  }
}

finalResult(humanScore, computerScore);







