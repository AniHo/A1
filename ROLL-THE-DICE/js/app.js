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

function tryLoadGame() {
  playerScore = getCookie ("playerScore");
  aiScore = getCookie ("aiScore");
}

// PROCESSES
tryLoadGame();
scoreResult();

singleButton.addEventListener("click", function() {

  getRandomNumberOneToSixForPlayer () ;
  showPlayerRollResult () ;
  getRandomNumberOneToSixForAi() ;
showAiRollResult () ;
evaluateResult();
scoreResult();
saveGame();

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
   result.innerText= " Player Wins";
    playerScore++;
  } else if (playerRoll > playerAi) {
    aiScore++;
    result.innerText = "Player Lose";
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
playerScoreText.innerText = "Player score" + playerScore;
aiScoreText.innerText = "Ai score:" + aiScore;
}

function saveGame() {
  document.cookie = "playerScore=" + playerScore + "; expires=Thu, 29 Dec 2024  12:00:00 UTC";
  document.cookie = "aiScore=" + aiScore +"; expires=Thu, 29 Dec 2024  12:00:00 UTC";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {let c = ca[i];
    while (c.charAt(0) === ' ') {c = c.substring(1);       }
    if (c.indexOf(name) === 0) {return c.substring(name.length, c.length);
    }
  }
  return 0;
}
