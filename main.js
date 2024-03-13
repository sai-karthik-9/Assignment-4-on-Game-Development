const playerBox = document.querySelector(".player");
const playerHandImg = document.querySelector("#player-hand");
const CompHandImg = document.querySelector("#Comp-hand");
const optionItems = document.querySelectorAll(".options > img");
const optionsBox = document.querySelector(".options");
const playerScoreText = document.querySelector(".player-score");
const CompScoreText = document.querySelector(".Comp-score");
const replayBox = document.querySelector(".replay");
const handChoices = ["rock", "paper", "scissors"];

let playerPoints = 0;
let CompPoints = 0;

function handleOptionClick(option) {
  option.addEventListener("click", () => processPlayerChoice(option.alt));
}

optionItems.forEach(handleOptionClick);

function processPlayerChoice(playerPick) {
  playerHandImg.src = `assets/${playerPick}-hand.png`;
  const CompPick = handChoices[Math.floor(Math.random() * handChoices.length)];
  showCompHand(CompPick);
  compareHands(playerPick, CompPick);
}

function showCompHand(hand) {
  CompHandImg.src = `assets/${hand}-hand.png`;
}

function compareHands(playerHand, CompHand) {
  console.log("Player chose:", playerHand);
  console.log("Comp chose:", CompHand);

  if (
    (playerHand === "rock" && CompHand === "scissors") ||
    (playerHand === "paper" && CompHand === "rock") ||
    (playerHand === "scissors" && CompHand === "paper")
  ) {
    playerPoints++;
    playerScoreText.textContent = playerPoints;
    console.log("Player wins this round!");
  } else if (
    (playerHand === "rock" && CompHand === "paper") ||
    (playerHand === "paper" && CompHand === "scissors") ||
    (playerHand === "scissors" && CompHand === "rock")
  ) {
    CompPoints++;
    CompScoreText.textContent = CompPoints;
    console.log("Comp wins this round!");
  } else {
    console.log("It's a tie!");
  }

  console.log("Player's score:", playerPoints);
  console.log("Comp's score:", CompPoints);

  checkGameOutcome(playerPoints, CompPoints);
}

function checkGameOutcome(playerPoints, CompPoints) {
  if (playerPoints === 5) {
    optionsBox.style.visibility = "hidden";
    replayBox.style.visibility = "visible";
    replayBox.querySelector("h3").textContent = "You won the game!";
  } else if (CompPoints === 5) {
    optionsBox.style.visibility = "hidden";
    replayBox.style.visibility = "visible";
    replayBox.querySelector("h3").textContent = "Comp won the game!";
  }
}

const playAgainBtn = document.querySelector(".play-again-box");
playAgainBtn.onclick = () => {
  window.location.href = "main.html";
};
