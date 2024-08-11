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

function playRound(humanChoice, computerChoice) {
  // Define the win conditions
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  let resultMessage = "";

  // Determine the outcome
  if (humanChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    resultMessage = `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`;
  } else {
    computerScore++;
    resultMessage = `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`;
  }

  // Update the DOM with the results
  document.getElementById("roundResult").textContent = resultMessage;
  document.getElementById(
    "score"
  ).textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

  // Check if there is a winner
  if (humanScore === 5 || computerScore === 5) {
    const winnerMessage =
      humanScore === 5
        ? "Congratulations! You won the game!"
        : "Game Over! The computer won the game!";
    document.getElementById("winner").textContent = winnerMessage;

    // Disable the buttons after the game ends
    document
      .querySelectorAll("#game button")
      .forEach((button) => (button.disabled = true));
  }
}

//Reset Button
function resetGame() {
  humanScore = 0;
  computerScore = 0;

  document.getElementById("score").textContent = `Score: You 0 - Computer 0`;
  document.getElementById("roundResult").textContent = "";
  document.getElementById("winner").textContent = "";

  document
    .querySelectorAll("#game button")
    .forEach((button) => (button.disabled = false));
}

// Add event listeners to the buttons
document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock", getComputerChoice()));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper", getComputerChoice()));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors", getComputerChoice()));
document.getElementById("reset").addEventListener("click", () => resetGame());
