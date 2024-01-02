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
    let res = (computerSelection == playerSelection) ? "Tie" : diffSelection(computerSelection, playerSelection)

    return res
}

function getComputerChoice() {
    const decision = Math.floor(Math.random() * 3)

    if (decision == 0) {
        return "rock"
    } else if (decision == 1) {
        return "paper"
    } else if (decision == 2) {
        return "scissor"
    }
}

function playRound(computerSelection, playerSelection) {
    const result = gameLogic(computerSelection, playerSelection)

    if (result == "Player win") {
        console.log("Player +1 point.")
        return "win"
    } else if (result == "Comp win") {
        console.log("Computer got a point")
        return "lose"
    } else if (result == "Tie") {
        console.log("Tie. Nothing happen, keep going...")
        return "tie"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        const buttons = document.querySelectorAll("button")
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const playerSelection = button.textContent.toLowerCase().trim()
                const computerSelection = getComputerChoice()

                let result = playRound(computerSelection, playerSelection)

                if (result == "win") {
                    playerScore += 1
                } else if (result == "lose") {
                    computerScore += 1
                }
            })
        })
    }

    // const buttons = document.querySelectorAll("button")
    // buttons.disabled = true
    // console.log(playerChoice)
}

game()