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