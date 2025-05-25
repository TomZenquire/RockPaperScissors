humanScore = 0
computerScore = 0

function singleRound(humanInput) {
  let computerInput = getRndInteger(1,3);
  alert ("Human has: " + convertToRPS(humanInput) + "\n" +
    "Computer has: " + convertToRPS(computerInput) + "\n" +
    getWinner(humanInput,computerInput));
  if (humanScore === 3) {alert ("Game over!\nHuman wins!"); disableButtons()}
  if (computerScore === 3) {alert ("Game over!\nComputer wins!"); disableButtons()}
}

function disableButtons () {
  const buttons = document.querySelectorAll('button')
  buttons.forEach((button) => {button.setAttribute('disabled', 'true')})
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};
function convertToRPS(numberInput) {
  if (numberInput === 1) {return "Rock"} else;
  if (numberInput === 2) {return "Paper"} else;
  if (numberInput === 3) {return "Scissors"}
};

function convertRPSToNumber (textInput) {
  if (textInput.toUpperCase() === "ROCK") {return 1} else;
  if (textInput.toUpperCase() === "PAPER") {return 2} else;
  if (textInput.toUpperCase() === "SCISSORS") {return 3} else;
  alert("Invalid selection, please try again");
  let textChoice = prompt("Pick your move (Rock, paper or scissors)");
  return humanChoice = convertRPSToNumber(textChoice);
};

function getWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
        return "Draw!"
  } else;
  if (humanChoice === 1 && computerChoice === 3 || humanChoice === 1 && computerChoice === 3 || humanChoice === 3 && computerChoice === 2) {
    humanScore = humanScore + 1; document.getElementById("humanScore").textContent = humanScore; return "Human wins!"
  } else ;
  computerScore = computerScore + 1; document.getElementById("computerScore").textContent = computerScore; return "Computer wins!";
};