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
            alert("Round tied! The computer chose rock.");
        } else if (computerChoice === "paper") {
            alert("You lose! Paper beats rock.");
            computerScore++;
        } else {
            alert("You win! Rock beats scissors.")
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            alert("You Win! Paper beats rock.");
            humanScore++;
        } else if (computerChoice === "paper") {
            alert("Round tied! The computer chose paper.");
        } else {
            alert("You lose! Scissors beat paper.");
            computerScore++;
        }
    } else { // human chose scissors
        if (computerChoice === "rock") {
            alert("You Lose! Rock beats scissors.");
            computerScore++;
        } else if (computerChoice === "paper") {
            alert("You win! Scissors beats paper.");
            humanScore++;
        } else {
            alert("Round tied! The computer chose scissors.");
        }
    }
    score.textContent = "Player: " + humanScore +
    " | Computer: " + computerScore;

    if (humanScore >= 5) {
        alert("You win!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        alert("Computer wins!");
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
