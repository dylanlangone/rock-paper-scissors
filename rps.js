console.log("Hello, rps!");

let humanScore = 0;
let computerScore = 0;

// randomly return rock, paper, or scissors
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Please choose rock, paper, or scissors");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            result.textContent = "Round tied! The computer chose rock. Play another round!";
        } else if (computerChoice === "paper") {
            result.textContent = "You lose! Paper beats rock. Play another round!";
            computerScore++;
        } else {
            result.textContent = "You win! Rock beats scissors. Play another round!";
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            result.textContent = "You Win! Paper beats rock. Play another round!";
            humanScore++;
        } else if (computerChoice === "paper") {
            result.textContent = "Round tied! The computer chose paper. Play another round!";
        } else {
            result.textContent = "You lose! Scissors beat paper. Play another round!";
            computerScore++;
        }
    } else { // human chose scissors
        if (computerChoice === "rock") {
            result.textContent = "You Lose! Rock beats scissors. Play another round!";
            computerScore++;
        } else if (computerChoice === "paper") {
            result.textContent = "You win! Scissors beats paper. Play another round!";
            humanScore++;
        } else {
            result.textContent = "Round tied! The computer chose scissors. Play another round!";
        }
    }
    score.textContent = "Player: " + humanScore +
    " | Computer: " + computerScore;

    if (humanScore >= 5) {
        result.textContent = "You win! Play again?";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        result.textContent = "Computer wins! Play again?";
        humanScore = 0;
        computerScore = 0;
    }
}


const rock = document.querySelector("#rock");
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
 
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const score = document.querySelector(".score");
const result = document.querySelector(".result");
