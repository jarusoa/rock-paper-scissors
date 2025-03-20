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
  
function playGame(){

    for(let i = 0; i < 5; i++){
        var humanChoice = getHumanChoice();
        var computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if(humanScore == computerScore){
        console.log("Human and Computer tied the game!");
    }
    else if(humanScore > computerScore){
        console.log("Human wins the game!");
    }
    else{
        console.log("Computer wins the game!")
    }
}

var humanScore = 0;
var computerScore = 0;
playGame();

  