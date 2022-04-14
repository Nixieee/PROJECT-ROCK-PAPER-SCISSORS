function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPlay() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomInt = getRandomInt(3);
    return choice[randomInt];
}

function playARound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let result;

    //0 - player won , 1 - player lost , 2 - draw
    switch (playerChoice) {
        case "rock": {
            if (computerChoice == "scissors") result = 0;
            else if (computerChoice == "paper") result = 1;
            else result = 2;
        } break;
        case "paper": {
            if (computerChoice == "rock") result = 0;
            else if (computerChoice == "scissors") result = 1;
            else result = 2;
        } break;
        case "scissors": {
            if (computerChoice == "paper") result = 0;
            else if (computerChoice == "rock") result = 1;
            else result = 2;
        } break;
    }
    return result;
}

function annouceWinnerOfRound(result, playerChoice, computerChoice) {
    if (result == 0) return "You won! " + playerChoice.charAt(0).toUpperCase()+playerChoice.slice(1) + " beats " + computerChoice.toLowerCase();
    if (result == 1) return "You lost! " + computerChoice.charAt(0).toUpperCase()+playerChoice.slice(1) + " beats " + playerChoice.toLowerCase();
    if (result == 2) return "Draw!";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Pick rock, paper or scissors");
        let computerChoice = computerPlay();
        currentGame = playARound(playerChoice, computerChoice);
        if (currentGame == 0) {
            playerScore++;
            console.log(annouceWinnerOfRound(currentGame, playerChoice, computerChoice));
        }
        else if (currentGame == 1) {
            computerScore++;
            console.log(annouceWinnerOfRound(currentGame, playerChoice, computerChoice));
        }
        else if (currentGame == 2) {
            console.log(annouceWinnerOfRound(currentGame, playerChoice, computerChoice));
        }
    }
    return "Final score: " + " player score =" + playerScore + " computer score =" + computerScore;
}

console.log(game());