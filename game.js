/*
We store our game status element here to allow us to more easily 
use it later on 
*/
const statusDisplay = document.querySelector(".game--status");
/*
Here we declare some variables that we will use to track the 
game state throught the game. 
*/
/*
We will use gameActive to pause the game in case of an end scenario
*/
let gameActive = true;
/*
We will store our current player here, so we know whos turn 
*/
let currentPlayer = "X";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*
We will store our current game state here, the form of empty strings in an array
 will allow us to easily track played cells and validate the game state later on
*/
let gameState = ["", "", "", "", "", "", "", "", ""];
/*
Here we have declared some messages we will display to the user during the game.
Since we have some dynamic factors in those messages, namely the current player,
we have declared them as functions, so that the actual message gets created with 
current data every time we need it.
*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
/*
We set the inital message to let the players know whose turn it is
*/
// statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed(clickedCell, index) {
  console.log(`put a mark in ${index}`);
  if (currentPlayer == "O") {
    console.log(event);
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }
  gameState[index] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
  console.log(gameState);
}

function handlePlayerChange() {}

function checkWhoWins() {
  for (i = 0; i <= 7; i++) {
    const indexA = winningConditions[i][0];
    const indexB = winningConditions[i][1];
    const indexC = winningConditions[i][2];

    let a = gameState[indexA];
    let b = gameState[indexB];
    let c = gameState[indexC];
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`currentPlayer is ${currentPlayer}`);
    if (a == currentPlayer && b == currentPlayer && c == currentPlayer) {
      console.log("Ta-da");
      console.log(`${currentPlayer} is the winner`);
      document.querySelector(".Winner").innerHTML =
        "The Current Player has won!";
    }
  }
}

function handleCellClick(event) {
  console.log("click");
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );
  console.log(clickedCellIndex);

  if (gameState[(clickedCell, clickedCellIndex)] == "") {
    handleCellPlayed(clickedCell, clickedCellIndex);
    checkWhoWins();
  } else {
    console.log("do nothing");
  }
}
function handleRestartGame() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  console.log(gameState);
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
  document.querySelector(".Winner").innerHTML = " ";
}
/*
And finally we add our event listeners to the actual game cells, as well as our 
restart button
*/
document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
document
  .querySelector(".game--restart")
  .addEventListener("click", handleRestartGame);
