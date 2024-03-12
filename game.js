const playerContainer = document.querySelector(".user");
const playerImage = document.querySelector("#user-hand");
const aiImage = document.querySelector("#ai-hand");
const optionElements = document.querySelectorAll(".options > img");
const optionsContainer = document.querySelector(".options");
const playerScoreDisplay = document.querySelector(".score-user");
const aiScoreDisplay = document.querySelector(".score-ai");
const replayContainer = document.querySelector(".replay");
const handOptions = ["rock", "paper", "scissors"];

let playerScore = 0;
let aiScore = 0;

// Get input from the player
optionElements.forEach((option) => {
  option.addEventListener("click", () => processInput(option.alt));
});

// Process input
function processInput(playerChoice) {
  playerImage.src = `assets/${playerChoice}-hand.png`;
  const aiChoice = handOptions[Math.floor(Math.random() * 3)];
  generateAIHand(aiChoice);
  compareHands(playerChoice, aiChoice);
}

// Generate random hand image for AI
function generateAIHand(hand) {
  aiImage.src = `assets/${hand}-hand.png`;
}

// Compare player's and AI's hands
function compareHands(playerHand, aiHand) {
  console.log("Player hand:", playerHand);
  console.log("AI hand:", aiHand);

  if (
    (playerHand === "rock" && aiHand === "scissors") ||
    (playerHand === "paper" && aiHand === "rock") ||
    (playerHand === "scissors" && aiHand === "paper")
  ) {
    playerScore++;
    console.log("Player wins this round!");
  } else if (playerHand !== aiHand) {
    aiScore++;
    console.log("AI wins this round!");
  }

  console.log("Player score:", playerScore);
  console.log("AI score:", aiScore);

  checkScore(playerScore, aiScore);
}


// Check score to determine game outcome
function checkScore(playerScore, aiScore) {
  if (playerScore === 5 || aiScore === 5) {
    optionsContainer.style.visibility = "hidden";
    replayContainer.style.visibility = "visible";
  }
}

// Restart the game when play again button is clicked
const playAgainButton = document.querySelector(".play-again-box");
playAgainButton.onclick = () => {
  window.location.href = "game.html"; // Redirecting to the game page
};
