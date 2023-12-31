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

// console.log(computerSelection)
// console.log(playerSelection)
// process.exit()

// console.log(gameLogic(computerSelection, playerSelection));
function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let computerSelection = getComputerChoice()
        let playerSelection = getPlayerChoice()

        let result = gameLogic(computerSelection, playerSelection);
        // console.log(result)

        if (result == "Player win") {
            console.log("Player +1 point.")
            playerScore += 1
        } else if (result == "Comp win") {
            console.log("Computer got a point")
            computerScore += 1
        } else if (result == "Tie") {
            console.log("Tie. Nothing happen, keep going...")
        }

        console.log("Current score:")
        console.log("Player score:", playerScore)
        console.log("Computer score:", computerScore)

    }

    if (playerScore >= 5) {
        console.log("Player has win. Game end")
    } else if (computerScore >= 5) {
        console.log("Computer win. Starting countdown of destruction of humanity.")
    }
}

game()