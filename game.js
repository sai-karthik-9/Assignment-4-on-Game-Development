const gameElements = {
  userContainer: document.querySelector(".user"),
  userHandImage: document.querySelector("#user-hand"),
  aiHandImage: document.querySelector("#ai-hand"),
  choiceButtons: document.querySelectorAll(".options > img"),
  optionsContainer: document.querySelector(".options"),
  playerScoreboard: document.querySelector(".score-user"),
  aiScoreboard: document.querySelector(".score-ai"),
  replayContainer: document.querySelector(".replay"),
};

const handChoices = ["rock", "paper", "scissors"];

let playerScore = 0;
let aiScore = 0;

// Event listener for user's choice selection
gameElements.choiceButtons.forEach((button) => {
  button.addEventListener("click", () => handleUserChoice(button.alt));
});

// Handling user's choice selection
function handleUserChoice(userChoice) {
  gameElements.userHandImage.src = `assets/${userChoice}-hand.png`;
  const aiChoice = generateAIChoice();
  gameElements.aiHandImage.src = `assets/${aiChoice}-hand.png`;
  compareChoices(userChoice, aiChoice);
}

// Generating random AI choice
function generateAIChoice() {
  return handChoices[Math.floor(Math.random() * 3)];
}

// Comparing user's and AI's choices
function compareChoices(userChoice, aiChoice) {
  console.log("User choice:", userChoice);
  console.log("AI choice:", aiChoice);

  const winningHandMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winningHandMap[userChoice] === aiChoice) {
    playerScore++;
    console.log("Player wins this round!");
  } else if (userChoice !== aiChoice) {
    aiScore++;
    console.log("AI wins this round!");
  } else {
    console.log("It's a tie!");
  }

  updateScoreboard();
  checkScore();
}

// Updating the score display elements
function updateScoreboard() {
  gameElements.playerScoreboard.textContent = playerScore;
  gameElements.aiScoreboard.textContent = aiScore;
}

// Checking score to determine game outcome
function checkScore() {
  if (playerScore === 5 || aiScore === 5) {
    gameElements.optionsContainer.style.display = "none";
    gameElements.replayContainer.style.display = "block";
    // Add additional logic for displaying winner or other end-game actions here
  }
}

// Restart the game when play again button is clicked
const playAgainButton = document.querySelector(".play-again-box");
playAgainButton.onclick = () => {
  window.location.href = "game.html"; // Redirecting to the game page
};
