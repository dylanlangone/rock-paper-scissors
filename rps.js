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
            console.log("Round tied! The computer chose rock.");
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        } else {
            console.log("You win! Rock beats scissors.")
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You Win! Paper beats rock.");
            humanScore++;
        } else if (computerChoice === "paper") {
            console.log("Round tied! The computer chose paper.");
        } else {
            console.log("You lose! Scissors beat paper.");
            computerScore++;
        }
    } else { // human chose scissors
        if (computerChoice === "rock") {
            console.log("You Lose! Rock beats scissors.");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        } else {
            console.log("Round tied! The computer chose scissors.");
        }
    }
}

function playGame() {
   /* for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); 
    }
    
    console.log("Final Score: Human: " + humanScore + "\nComputer Score: " + computerScore);
    */
}

playGame();