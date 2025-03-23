var humanScore = 0;
var computerScore = 0;

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

function updateHumanScore() {
    humanScoreText.textContent = "Human Score: " + humanScore;
    if(humanScore == 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        resultText.textContent = "Human Wins!";
    }
}

function updateComputerScore(){
    computerScoreText.textContent = "Computer Score: " + computerScore;
    if(computerScore == 5){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorButton.disabled = true;
        resultText.textContent = "Computer Wins!";
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() == "rock" ){
        if(computerChoice == "rock"){
            resultText.textContent = "You tied! Rock ties with Rock.";
        }
        else if(computerChoice == "paper"){
            resultText.textContent = "You lost! Paper beats Rock.";
            computerScore += 1;
            updateComputerScore();
        }
        else{
            resultText.textContent = "You won! Rock beats Scissors.";
            humanScore += 1;
            updateHumanScore();
        }
    }
    else if(humanChoice.toLowerCase() == "paper" ){
        if(computerChoice == "rock"){
            resultText.textContent = "You won! Paper beats Rock.";
            humanScore += 1;
            updateHumanScore();
        }
        else if(computerChoice == "paper"){
            resultText.textContent = "You tied! Paper ties with Paper.";
        }
        else{
            resultText.textContent = "You lost! Scissors beats paper.";
            computerScore += 1;
            updateComputerScore();
        }
    }
    else{
        if(computerChoice == "rock"){
            resultText.textContent = "You lost! Rock beats Scissors.";
            computerScore += 1;
            updateComputerScore();
        }
        else if(computerChoice == "paper"){
            resultText.textContent = "You won! Scissors beats Paper.";
            humanScore += 1;
            updateHumanScore();
        }
        else{
            resultText.textContent = "You tied! Scissors ties with Scissors.";
        }
    }
}

var rockButton = document.createElement('button');
var paperButton = document.createElement('button');
var scissorButton = document.createElement('button');

rockButton.textContent = "Rock!";
paperButton.textContent = "Paper!";
scissorButton.textContent = "Scissor!";

rockButton.addEventListener("click", function() { playRound("rock", getComputerChoice())});
paperButton.addEventListener("click", function() { playRound("paper", getComputerChoice())});
scissorButton.addEventListener("click", function() { playRound("scissor", getComputerChoice())});



var buttonContainer = document.getElementById("button-container");

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorButton);


var resultText = document.createElement("p");

var resultTextContainer = document.getElementById("result-text");

resultTextContainer.appendChild(resultText);

var computerScoreText = document.createElement("p");
var humanScoreText = document.createElement("p");

computerScoreText.textContent = "Computer Score: " + computerScore;
humanScoreText.textContent = "Human Score: " + humanScore;

var resultScoreContainer = document.getElementById("result-score");

resultScoreContainer.appendChild(humanScoreText);
resultScoreContainer.appendChild(computerScoreText);



  