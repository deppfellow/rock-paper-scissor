function diffSelection(computerSelection, playerSelection) {
    if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            return "Player win"
        } else {
            return "Comp win"
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "scissor") {
            return "Player win"
        } else {
            return "Comp win"
        }
    } else if (computerSelection == "scissor") {
        if (playerSelection == "rock") {
            return "Player win"
        } else {
            return "Comp win"
        }
    }
}

function gameLogic(computerSelection, playerSelection) {
    let res;

    res = (computerSelection == playerSelection) ? "Tie" : diffSelection(computerSelection, playerSelection)

    return res
}

function getComputerChoice() {
    const decision = Math.floor(Math.random() * 3)
    console.log(decision)

    if (decision == 0) {
        return "rock"
    } else if (decision == 1) {
        return "paper"
    } else if (decision == 2) {
        return "scissor"
    }
}

function getPlayerChoice() {
    const selection = prompt("Your choice?").toLowerCase()

    return selection
}

let computerSelection = getComputerChoice()
let playerSelection = getPlayerChoice()

// console.log(computerSelection)
// console.log(playerSelection)
// process.exit()

console.log(gameLogic(computerSelection, playerSelection));