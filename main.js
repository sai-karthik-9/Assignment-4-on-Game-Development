const gameElements = {
  playerBox: document.querySelector(".player"),
  playerHandImage: document.querySelector("#player-hand"),
  computerHandImage: document.querySelector("#Comp-hand"),
  choiceButtons: document.querySelectorAll(".options > img"),
  optionsContainer: document.querySelector(".options"),
  playerScoreDisplay: document.querySelector(".player-score"),
  computerScoreDisplay: document.querySelector(".Comp-score"),
  replayBox: document.querySelector(".replay"),
};

const handOptions = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

// Event listener for user's choice selection
gameElements.choiceButtons.forEach((button) => {
  button.addEventListener("click", () => handleUserChoice(button.alt));
});

// Handling user's choice selection
function handleUserChoice(userChoice) {
  gameElements.playerHandImage.src = `assets/${userChoice}-hand.png`;
  const computerChoice = generateComputerChoice();
  gameElements.computerHandImage.src = `assets/${computerChoice}-hand.png`;
  compareChoices(userChoice, computerChoice);
}

// Generating random computer choice
function generateComputerChoice() {
  return handOptions[Math.floor(Math.random() * handOptions.length)];
}

// Comparing user's and computer's choices
function compareChoices(userChoice, computerChoice) {
  console.log("Player chose:", userChoice);
  console.log("Computer chose:", computerChoice);

  const winningHandMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winningHandMap[userChoice] === computerChoice) {
    playerScore++;
    gameElements.playerScoreDisplay.textContent = playerScore;
    console.log("Player wins this round!");
  } else if (userChoice !== computerChoice) {
    computerScore++;
    gameElements.computerScoreDisplay.textContent = computerScore;
    console.log("Computer wins this round!");
  } else {
    console.log("It's a tie!");
  }

  checkGameOutcome();
}

// Checking score to determine game outcome
function checkGameOutcome() {
  if (playerScore === 5) {
    gameElements.optionsContainer.style.display = "none";
    gameElements.replayBox.style.display = "block";
    gameElements.replayBox.querySelector("h3").textContent = "You won the game!";
  } else if (computerScore === 5) {
    gameElements.optionsContainer.style.display = "none";
    gameElements.replayBox.style.display = "block";
    gameElements.replayBox.querySelector("h3").textContent = "Computer won the game!";
  }
}

const playAgainButton = document.querySelector(".play-again-box");
playAgainButton.onclick = () => {
  window.location.href = "main.html";
};
