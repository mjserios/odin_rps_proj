const rockChoice = document.querySelector(".rock");
const paperChoice = document.querySelector(".paper");
const scissorChoice = document.querySelector(".scissors");
const displayMsg = document.querySelector(".battleArea p");
let imageDisplay = document.querySelector(".battleArea img");
const userScore = document.querySelector(".myCounter");
const enemyScore = document.querySelector(".enemyCounter");
let wins = 0;
let loses = 0;

function getComputerChoice (){
    rng = Math.floor(Math.random() * 3) + 1; // Generate random number from 1-3
    switch (rng){
        case 1:
            pick = "rock";
            return pick
        case 2:
            pick = "paper";
            return pick
        case 3:
            pick = "scissors";
            return pick
    }  
}

function playRound (playerSelection, computerSelection){
    console.log("Rock, Paper, Scissors, Shoot!");
    userScore.textContent = wins;
    enemyScore.textContent = loses;
    if (wins == 5){
        alert("Congratulations you won the series!");
        wins = 0;
        loses = 0;
        imageDisplay.src = "down.gif";
    }
    else if (loses == 5) {
        alert("Get noob");
        wins = 0;
        loses = 0;
        imageDisplay.src = "down.gif";
    }
    switch (playerSelection){
        case "rock":
            switch (computerSelection){
                case "scissors":
                    displayMsg.textContent = "You win! Rock > Scissors!";
                    imageDisplay.src = "scissor.png";
                    wins += 1;
                    return 
                case "rock":
                    displayMsg.textContent = "It's a draw!";
                    imageDisplay.src = "rock.png";
                    return
                case "paper":
                    displayMsg.textContent = "You lose! Rock < Paper! :(";
                    imageDisplay.src = "paper.png";
                    loses += 1;
                    return 
            }
        case "paper":
            switch (computerSelection){
                case "rock":
                    displayMsg.textContent = "You win! Paper > Rock!";
                    imageDisplay.src = "rock.png";
                    wins += 1;
                    return 
                case "paper":
                    displayMsg.textContent = "It's a draw!";
                    imageDisplay.src = "paper.png";
                    return
                case "scissors":
                    displayMsg.textContent = "You lose! Paper < Scissors! :(";
                    imageDisplay.src = "scissor.png";
                    loses += 1;
                    return 
            }
        case "scissors":
            switch (computerSelection){
                case "paper":
                    displayMsg.textContent = "You win! Scissors > Paper!";
                    imageDisplay.src = "paper.png";
                    wins += 1;
                    return 
                case "scissors":
                    displayMsg.textContent = "It's a draw!";
                    imageDisplay.src = "scissor.png";
                    return
                case "rock":
                    displayMsg.textContent = "You lose! Scissors < Rock! :(";
                    imageDisplay.src = "rock.png";
                    loses += 1;
                    return
            }
        }
}

    rockChoice.addEventListener("click", () => {
        playRound("rock", getComputerChoice())
    })
    paperChoice.addEventListener("click", () => {
        playRound("paper", getComputerChoice())
    })
    scissorChoice.addEventListener("click", () => {
        playRound("scissors", getComputerChoice())
    })

    if (wins == 5){
        alert("Congratulations you won the series!");

    }
    else if (loses == 5) {
        alert("Get noob");
    }





