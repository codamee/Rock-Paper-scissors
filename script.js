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

function getHumanChoice() {
    let userGuess = prompt("Enter Choice :")
    return userGuess;
}


let userScore = 0
let computerScore = 0
function playRound(userChoice, computerChoice) {
    if (computerChoice == "rock") {
        if (userChoice == "paper") {
            userScore = userScore + 1
            // console.log(userScore, "user")
        }
        else if (userChoice == "scissor") {
            computerScore = computerScore + 1
            // console.log(computerScore, "computer")
        }
        else {
            // console.log("Draw")
        }
    }
    else if (computerChoice == "paper") {
        if (userChoice == "scissor") {
            userScore = userScore + 1
            // console.log(userScore, "user")
        }
        else if (userChoice == "rock") {
            computerScore = computerScore + 1
            // console.log(computerScore, "computer")
        }
        else {
            // console.log("Draw")
        }
    }
    else if (computerChoice == "scissor") {
        if (userChoice == "rock") {
            userScore = userScore + 1
            // console.log(userScore, "user")
        }
        else if (userChoice == "paper") {
            computerScore = computerScore + 1
            // console.log(computerScore, "computer")
        }
        else {
            // console.log("Draw")
        }
    }
}
function playGame() {
    let rounds = 0
    while (rounds <= 5) {
        let userChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(userChoice, computerChoice)
        rounds++
    }
}
playGame()
if (computerScore > userScore) {
    console.log(`Better luck next time .your score is ${userScore},computer score is ${computerScore}`)
}

else if (computerScore < userScore) {
    console.log("Congratulations!🎉🎉🎉 You won", "your score is ", userScore)
}
else {
    console.log("Draw")
}