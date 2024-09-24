const singleButton = document.getElementById("ButtonOn") ;
const playerRollText = document.getElementById("playerRollText") ;
const aiRollText =document.getElementById("aiRollText") ;
const result = document.getElementById("result") ;
const playerScoreText = document.getElementById("playerScoreText") ;
const aiScoreText = document.getElementById("aiScoreText") ;

let playerRoll = 1;
let playerAi = 2;
let playerScore =2;
let aiScore =3;
// PROCESSES


singleButton.addEventListener("click", function() {

  getRandomNumberOneToSixForPlayer () ;
  showPlayerRollResult () ;
  getRandomNumberOneToSixForAi() ;
showAiRollResult () ;
evaluateResult();
scoreResult();
});

// CONTROLLERS


function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}
function getRandomNumberOneToSixForAi() {
  playerAi = Math.floor(Math.random() * 6) + 1;
}

function evaluateResult() {
  if (playerRoll < playerAi) {
   playerScoreText.innerText= "WINNER";
    playerScore++;
  } else if (playerRoll > playerAi) {
    aiScore++;
    aiScoreText.innerText = "You Win";
  }
else  {
  result.innerText= "Its a Draw";
  }
}

//View
function showPlayerRollResult() {
  playerRollText.innerText = "Player:" + playerRoll;
}

function showAiRollResult() {
  aiRollText.innerText = "Ai:" + playerAi;
}

function scoreResult() {
  result.innerText = "Player score:" + playerScore + "" + " Ai Score:"  + aiScore;

}
