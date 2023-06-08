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
    let foo = true;
    switch (foo){
        case playerSelection.toLowerCase() === "rock" && computerSelection === "scissors":
            return "You win! Rock beats Scissors";
        case playerSelection.toLowerCase() === "rock" && computerSelection === "paper":
            return "You lose! Paper beats Rock";
        case playerSelection.toLowerCase() === "scissors" && computerSelection === "paper":
            return "You win! Scissors beat Paper";
            
        case playerSelection.toLowerCase() === "scissors" && computerSelection === "rock":
            return "You lose! Rock beats Scissors";
            
        case playerSelection.toLowerCase() === "paper" && computerSelection === "rock":
            return "You win! Paper beats Rock";
            
        case playerSelection.toLowerCase() === "paper" && computerSelection === "scissors":
            return "You lose! Scissors beats Paper";
        case playerSelection.toLowerCase() === computerSelection:
             return "It`s a tie!"            
    }
}

let game = () =>{
    for (i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();