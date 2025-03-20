function getComputerChoice(){
    const num = Math.random();
    if(num < 0.33){
        return("rock");
    }
    else if(num < 0.66){
        return("paper");
    }
    else{
        return("scissors");
    }
}

function getHumanChoice(){
    humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice;
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() == "rock" ){
        if(computerChoice == "rock"){
            console.log("You tied! Rock ties with Rock.");
        }
        else if(computerChoice == "paper"){
            console.log("You lost! Paper beats Rock.");
            computerScore += 1;
        }
        else{
            console.log("You won! Rock beats Scissors.");
            humanScore += 1;
        }
    }
    else if(humanChoice.toLowerCase() == "paper" ){
        if(computerChoice == "rock"){
            console.log("You won! Paper beats Rock.");
            humanScore += 1;
        }
        else if(computerChoice == "paper"){
            console.log("You tied! Paper ties with Paper.");
        }
        else{
            console.log("You lost! Scissors beats paper.");
            computerScore += 1;
        }
    }
    else{
        if(computerChoice == "rock"){
            console.log("You lost! Rock beats Scissors.");
            computerScore += 1;
        }
        else if(computerChoice == "paper"){
            console.log("You won! Scissors beats Paper.");
            humanScore += 1;
        }
        else{
            console.log("You tied! Scissors ties with Scissors.");
        }
    }
}
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  