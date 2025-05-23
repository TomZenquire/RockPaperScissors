humanScore = 0
computerScore = 0

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
    humanScore = humanScore + 1; return "Human wins"
  } else ;
  computerScore = computerScore + 1; return "Computer wins";
};

function playRound(humanChoice, computerChoice) {
	alert( getWinner(humanChoice, computerChoice).concat(
    ".\nHuman has ",convertToRPS(humanChoice),
    ".\nComputer has ",convertToRPS(computerChoice) ,
    ".\n\nComputer score: ",computerScore,"\nHuman Score: ",humanScore)
    );
	};

function playGame(numberRounds) {
  for (let i = 1; i <= numberRounds; i++) {
    let textChoice = prompt("Pick your move (Rock, paper or scissors)");
    humanChoice = convertRPSToNumber(textChoice);
    computerChoice = getRndInteger(1, 3);
    playRound(humanChoice, computerChoice);
  };
};


void(playGame(5));
function finalMessage(humanScore, computerScore) {
  if (humanScore === computerScore) {return "It's a draw!"} else;
  if (humanScore > computerScore) {return "Human wins!"} else;
  return "Computer wins!"
}
alert(finalMessage(humanScore, computerScore).concat("\nHuman has: ", humanScore,"\nComputer has: ", computerScore))