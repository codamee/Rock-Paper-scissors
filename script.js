function getComputerChoice() {
    let computerGuess;
    let ranNumber = Math.floor(Math.random() * 3)
    if (ranNumber == 0) {
        computerGuess = "rock"
    }
    else if (ranNumber == 1) {
        computerGuess = "paper"
    }
    else {
        computerGuess = "scissor"
    }
    return computerGuess;
}

let userScore = 0
let computerScore = 0
function playRound(userChoice, computerChoice) {
    let score = document.querySelector(".score")
    if (userScore >= 5 || computerScore >= 5) {

        score.innerHTML = userScore > computerScore ? `<b>Congratulations! You won the game! 🎉 your score is ${userScore}🍾🎉 </b>(Reload the page TO play Again)` : `<b>The computer won. Better luck next time. 😔 your score is ${userScore}💔🥺 </b>(Reload the page TO play Again)`
        return;
    }
    if (computerChoice == userChoice) {
        score.innerText = "draw"
    }
    else if (
        (computerChoice == "rock" && userChoice == "paper") ||
        (computerChoice == "paper" && userChoice == "scissor") ||
        (computerChoice == "scissor" && userChoice == "rock")) {
        userScore++
        score.innerText = `You won this round!`
    }
    else {
        computerScore++
        score.innerText = `You lost this round!`
    }

}


function playGame() {
    let btns = document.querySelector(".btns")
    btns.addEventListener("click", (e) => {
        let userChoice = e.target.id
        let computerChoice = getComputerChoice()
        if (userChoice && computerChoice) {
            playRound(userChoice, computerChoice)
        }
    }
    )
}

playGame()

