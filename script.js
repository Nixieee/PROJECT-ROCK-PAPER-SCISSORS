function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

const onClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        computer = computerPlay();
        console.log(computer);
        result = playARound(event.target.id,computer)
        content.textContent = annouceWinnerOfRound(result,event.target.id,computer);
        if(result == 0){
            playerResult++;
            resultText.textContent = "Result: "+playerResult;
        }else if(result == 1){
            computerResult++;
            computerResultText.textContent = "Computer result: "+computerResult;
        }
        if(playerResult == 5){
            content.textContent = "Player was the first to 5 points!"
            playerResult = 0;
            computerResult = 0;
            resultText.textContent = "Result: "+playerResult;
            computerResultText.textContent = "Computer result: "+computerResult;
        }else if(computerResult == 5){
            content.textContent = "Computer was the first to 5 points!"
            playerResult = 0;
            computerResult = 0;
            resultText.textContent = "Result: "+playerResult;
            computerResultText.textContent = "Computer result: "+computerResult;
        }
    }
  }
  window.addEventListener('click', onClick);

  const container = document.querySelector('.container');
  const buttons = document.querySelector('.buttons')
  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = 'Make a choice!';
  insertBefore(content,buttons);
  
  const header = document.createElement('div');
  header.classList.add('header');
  insertBefore(header,container);
let playerResult = 0;
let computerResult = 0;

  const resultText = document.createElement('div');
  resultText.classList.add('resultText');
  resultText.textContent = "Result: "+playerResult;
  header.appendChild(resultText);

  const computerResultText = document.createElement('div');
  computerResultText.classList.add('computerResultText');
  computerResultText.textContent = "Computer result: "+computerResult;
  header.appendChild(computerResultText);   
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let randomInt = getRandomInt(3);
    return choice[randomInt];
}

function playARound(playerChoice, computerChoice) {
    //playerChoice = playerChoice.toLowerCase();
    //computerChoice = computerChoice.toLowerCase();
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
    if (result == 1) return "You lost! " + computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1) + " beats " + playerChoice.toLowerCase();
    if (result == 2) return "Draw!";
}



/*function game() {
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
*/