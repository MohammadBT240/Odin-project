console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randNum = Math.random(); // Generates a number between 0 and 1
  if (randNum <= 0.33) {
    return "rock";
  } else if (randNum <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humRes = prompt("Please enter either Rock, Paper, or Scissors");
  humRes = humRes.toLowerCase();
  const validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(humRes)) {
    alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
    return getHumanChoice(); // continuously ask again
  }
  return humRes;
}

function playRound(humanChoice, computerChoice) {
  // Define the win conditions
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // Determine the outcome
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }`
    );
  } else {
    computerScore++;
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`
    );
  }

  console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
