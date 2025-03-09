const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;
  const setMark = (index, mark) => {
    if (board[index] === "") board[index] = mark;
  };
  const resetBoard = () => board.fill("");

  return { getBoard, setMark, resetBoard };
})();

const Player = (name, mark) => {
  return { name, mark };
};

const GameController = (() => {
  let players = [];
  let currentPlayerIndex = 0;
  let gameOver = false;

  const startGame = (player1Name, player2Name) => {
    players = [Player(player1Name, "X"), Player(player2Name, "O")];
    gameOver = false;
    currentPlayerIndex = 0;
    Gameboard.resetBoard();
    DisplayController.renderBoard();
    DisplayController.displayMessage(
      `${players[currentPlayerIndex].name}'s turn`
    );
    document.getElementById("restartButton").style.display = "block";
  };

  const playTurn = (index) => {
    if (gameOver || Gameboard.getBoard()[index] !== "") return;

    Gameboard.setMark(index, players[currentPlayerIndex].mark);
    DisplayController.renderBoard();

    if (checkWinner()) {
      DisplayController.displayMessage(
        `${players[currentPlayerIndex].name} wins!`
      );
      gameOver = true;
    } else if (Gameboard.getBoard().every((cell) => cell !== "")) {
      DisplayController.displayMessage("It's a tie!");
      gameOver = true;
    } else {
      currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
      DisplayController.displayMessage(
        `${players[currentPlayerIndex].name}'s turn`
      );
    }
  };

  const checkWinner = () => {
    const board = Gameboard.getBoard();
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];
    return winningCombinations.some(
      (combo) =>
        board[combo[0]] !== "" &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]]
    );
  };

  return { startGame, playTurn };
})();

// console.log(GameController);

const DisplayController = (() => {
  const boardElement = document.querySelector(".gameboard");

  const messageElement = document.querySelector(".message");
  const renderBoard = () => {
    boardElement.innerHTML = "";
    Gameboard.getBoard().forEach((cell, index) => {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      cellElement.textContent = cell;
      cellElement.addEventListener("click", () =>
        GameController.playTurn(index)
      );
      boardElement.appendChild(cellElement);
    });
  };

  const displayMessage = (message) => {
    messageElement.textContent = message;
  };

  return { renderBoard, displayMessage };
})();

// Main Flow
document.getElementById("startButton").addEventListener("click", () => {
  const player1Name = document.getElementById("player1").value;
  const player2Name = document.getElementById("player2").value;
  if (player1Name && player2Name) {
    GameController.startGame(player1Name, player2Name);
  } else {
    alert("Please enter names for both players.");
  }
});

document.getElementById("restartButton").addEventListener("click", () => {
  const player1Name = document.getElementById("player1").value;
  const player2Name = document.getElementById("player2").value;
  if (player1Name && player2Name) {
    GameController.startGame(player1Name, player2Name);
  } else {
    alert("Please enter names for both players.");
  }
});
