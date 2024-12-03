console.log("Hello, rps!");

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

console.log("random choice: " + getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
    if (choice === "rock" || choice=== "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Please choose rock, paper, or scissors");
        return null;
    }
}

let humanChoice = getHumanChoice();
console.log("human choice: " + humanChoice);