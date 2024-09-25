const button0= document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const playerChoice = document.getElementById("playerChoice");
const onclick = document.getElementById("onclick");
const aiChoice = document.getElementById("aiChoice");;


onclick.addEventListener("click", () => {
  
});


function getRandomButtonForPlayer() {
  playerChoice.innerText = Math.floor(Math.random() * playerChoice.innerText);
}

