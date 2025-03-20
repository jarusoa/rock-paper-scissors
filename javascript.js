function getComputerChoice(){
    const num = Math.random();
    if(num < 0.33){
        return("Rock");
    }
    else if(num < 0.66){
        return("Paper");
    }
    else{
        return("Scissors");
    }
}

function getHumanChoice(){
    humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice;
}
