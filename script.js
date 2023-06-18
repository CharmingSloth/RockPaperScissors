let playerScore = 0;
let computerScore = 0;
let winner = ""

function updateScore(){
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'rock':
        playerChoice.textContent = '👊'
        break
      case 'paper':
        playerChoice.textContent = '🫳'
        break
      case 'scissors':
        playerChoice.textContent = '✌️'
        break
    }

    switch (computerSelection) {
        case 'rock':
          computerChoice.textContent = '👊'
          break
        case 'paper':
          computerChoice.textContent = '🫳'
          break
        case 'scissors':
          computerChoice.textContent = '✌️'
          break
      }
}

function isGameOver(playerScore, computerScore){
    if (playerScore >= 5 && computerScore < 5){
        endGameMassage.textContent = "You won!"
        popUp.classList.add('pop-up-show');
        overlay.classList.add('overlay-active');
    }else if (playerScore < 5 && computerScore >= 5){
        endGameMassage.textContent = "You lose!"
        popUp.classList.add('pop-up-show');
        overlay.classList.add('overlay-active');
    }
}

function startNewGame(){
    playerScore = 0;
    computerScore = 0;
    popUp.classList.remove('pop-up-show');
    overlay.classList.remove('overlay-active');
    result.textContent = "Chose your weapon";
    description.textContent = 'First to score 5 wins. Tie doesn`t count'
    computerChoice.textContent = '🤖';
    playerChoice.textContent = '🙂'

}

function roundWinner(winner, playerSelection, computerSelection){
    if (winner === 'tie'){
        result.textContent = 'It`s a tie';
        description.textContent = `${playerSelection} ties with ${computerSelection}`;
    }else if(winner === 'computer'){
        result.textContent = `You lose!`;
        description.textContent = `${computerSelection} beats ${playerSelection}`;
    }else if( winner === 'player'){
        result.textContent = `You win!`;
        description.textContent = `${playerSelection} beats ${computerSelection}`;
    }
}



let getComputerChoice = () => {
    randomValue = Math.floor(Math.random() * 3);
    if(randomValue == 0){
        return "rock"
    }
    if(randomValue == 1){
        return "paper"
    }
    if(randomValue == 2){
        return "scissors"
    }
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        winner = 'tie'
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
      ){
        playerScore++
        winner = 'player'
      }
      if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
      ) {
        computerScore++
        winner = 'computer'
      }

      roundWinner(winner, playerSelection, computerSelection);
}

const buttons = document.querySelectorAll('.button');
const result = document.querySelector('.result');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const popUp = document.querySelector('.pop-up');
const endGameMassage = document.querySelector('.pop-up-text');
const overlay = document.querySelector('.overlay');
const popUpButton = document.querySelector('.pop-up-button');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const description = document.querySelector('.description');

console.log(popUpButton);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        isGameOver(playerScore, computerScore);
        updateChoices(playerSelection, computerSelection);
        updateScore();
        console.log(winner);
    })
});

popUpButton.addEventListener('click', () =>{
    startNewGame();
    updateScore();
});