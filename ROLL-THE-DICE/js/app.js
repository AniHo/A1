const singleButton = document.getElementById("ButtonOn") ;
const playerRollText = document.getElementById("playerRollText") ;
const aiRollText =document.getElementById("aiRollText") ;
const result = document.getElementById("result") ;
const playerScoreText = document.getElementById("playerScoreText") ;
const aiScoreText = document.getElementById("aiScoreText") ;

let playerRoll = 1;
let playerAi = 2;
let playerScore =0;
let aiScore =0;

// PROCESSES


singleButton.addEventListener("click", function() {

  getRandomNumberOneToSixForPlayer () ;
  showPlayerRollResult () ;
  getRandomNumberOneToSixForAi() ;
showAiRollResult () ;
evaluateResult();
});

// CONTROLLERS


function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function getRandomNumberOneToSixForAi() {
  playerAi = Math.floor(Math.random() * 6) + 1;
}

function evaluateResult(playerScore,aiScore) {
  if (playerScore < aiScore) {
    playerScore++;
  } else if (playerScore > aiScore) {
    aiScore++;
  }

}

//View
function showPlayerRollResult() {
  playerRollText.innerText = "Player:" + playerRoll;
}

function showAiRollResult() {
  aiRollText.innerText = "Ai:" + playerAi;
}

