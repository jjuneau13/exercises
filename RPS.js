const result = document.querySelector('#first');
const second = document.querySelector('#second');
const secondResult = document.querySelector('#result');
function getComputerChoice() {
    let x = Math.random();
    if (x < 0.34) {
        return "rock";
    }
    else if (x <= 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors");
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid input. Enter rock, paper or scissors");
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie!";
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    second.textContent = `${humanScore} - ${computerScore}`;
    round++;
    if (round == 5){
        result.textContent = `Final Score: You ${humanScore} - ${computerScore} Computer`;
        if (humanScore > computerScore) {
            secondResult.textContent = "You win the game!";
        } else if (humanScore < computerScore) {
            secondResult.textContent = "You lose the game!";
        } else {
            secondResult.textContent = "The game is a tie!";
        }
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;

    result.textContent = 'Make your choice!';
    second.textContent = '';
    secondResult.textContent = '';
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const restart = document.querySelector('#restart');

rock.addEventListener('click', () => {if (round < 5){
    playRound('rock', getComputerChoice());
    } else {playGame();
    }
});
scissors.addEventListener('click', () => {if (round < 5){
    playRound('scissors', getComputerChoice());
    } else {playGame();
    }
});
paper.addEventListener('click', () => {if (round < 5){
    playRound('paper', getComputerChoice());
    } else {playGame();
    }
});
restart.addEventListener('click', () => playGame());
playGame();