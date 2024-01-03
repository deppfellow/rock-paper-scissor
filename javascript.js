const selectionBtn = document.querySelectorAll(".btn-selection button")
const roundDisplay = document.querySelector(".result-announcement")
const playerDisplay = document.querySelector(".player-score")
const computerDisplay = document.querySelector(".computer-score")

let computerSelection = [
    { "choice": "rock", "value": 0 },
    { "choice": "paper", "value": 1 },
    { "choice": "scissor", "value": 2 },
]
let playerSelection;
let computerScore = 0;
let playerScore = 0;

function getComputerSelection() {
    let computerChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)].choice

    return computerChoice
}

function getPlayerSelection(e) {
    playerSelection = e.target.id.toLowerCase()

    playRound(getComputerSelection(), playerSelection)
    updateScore();
    checkRound();

}

function playRoundCont(computerSelection, playerSelection) {
    if (computerSelection === "rock") {
        if (playerSelection === "paper") {
            roundDisplay.textContent = "Player Win. 1 point."
            playerScore += 1
        } else {
            roundDisplay.textContent = "Comp Win. They got point"
            computerScore += 1
        };
    } else if (computerSelection === "paper") {
        if (playerSelection === "scissor") {
            roundDisplay.textContent = "Player Win. 1 point."
            playerScore += 1
        } else {
            roundDisplay.textContent = "Comp Win. They got point"
            computerScore += 1
        };
    } else if (computerSelection === "scissor") {
        if (playerSelection === "rock") {
            roundDisplay.textContent = "Player Win. 1 point."
            playerScore += 1
        } else {
            roundDisplay.textContent = "Comp Win. They got point"
            computerScore += 1
        };
    };
};

function playRound(computerSelection, playerSelection) {
    (computerSelection === playerSelection) ? roundDisplay.textContent = "It's a Tie. Keep going." : playRoundCont(computerSelection, playerSelection)
};

function updateScore() {
    playerDisplay.textContent = playerScore
    computerDisplay.textContent = computerScore
}

function checkRound() {
    if (computerScore === 5 || playerScore === 5) {
        if (playerScore === 5) {
            roundDisplay.textContent = "Game End. Player Win. All Safe."
        } else if (computerScore === 5) {
            roundDisplay.textContent = "Game End. Computer Win. Destruction countdown start."
        }

        selectionBtn.forEach((button) => {
            button.disabled = true
        })
        // selectionBtn.forEach((button) => {
        //     button.removeEventListener("click", getPlayerSelection)
        // })
    }
}

selectionBtn.forEach((button) => {
    button.addEventListener("click", getPlayerSelection)
});
