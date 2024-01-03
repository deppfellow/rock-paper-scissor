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
    let announcement = document.querySelector(".result-announcement")

    if (result == "Player win") {
        announcement.textContent = "Player +1 point"
        return "win"
    } else if (result == "Comp win") {
        announcement.textContent = "Computer got a point"
        return "lose"
    } else if (result == "Tie") {
        announcement.textContent = "Tie. Nothing happen, keep going..."
        return "tie"
    }
}

const buttons = document.querySelectorAll("button")

function game() {
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.textContent.toLowerCase().trim()
            const computerSelection = getComputerChoice()

            let result = playRound(computerSelection, playerSelection)

            if (result == "win") {
                playerScore += 1

                const playerScoreToShow = document.querySelector(".player-score")
                playerScoreToShow.textContent = playerScore
            } else if (result == "lose") {
                computerScore += 1

                const ComputerScoreToShow = document.querySelector(".computer-score")
                ComputerScoreToShow.textContent = computerScore
            }
        })
    })
}

game()