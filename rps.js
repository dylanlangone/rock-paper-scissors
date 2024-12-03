console.log("Hello, rps!");

// randomly return rock, paper, or scissors
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    return randomInt;
}

console.log("random int: " + getComputerChoice());