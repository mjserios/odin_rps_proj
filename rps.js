const rockChoice = document.querySelector(".rock");
const paperChoice = document.querySelector(".paper");
const scissorChoice = document.querySelector(".scissors");
const displayMsg = document.querySelector(".battleArea p");
let imageDisplay = document.querySelector(".battleArea img");

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
    switch (playerSelection){
        case "rock":
            switch (computerSelection){
                case "scissors":
                    displayMsg.textContent = "You win! Rock > Scissors!";
                    imageDisplay.src = "scissor.png";
                    win += 1;
                    return 
                case "rock":
                    displayMsg.textContent = "It's a draw!";
                    imageDisplay.src = "rock.png";
                    return
                case "paper":
                    displayMsg.textContent = "You lose! Rock < Paper! :(";
                    imageDisplay.src = "paper.png";
                    lose += 1
                    return 
            }
        case "paper":
            switch (computerSelection){
                case "rock":
                    displayMsg.textContent = "You win! Paper > Rock!";
                    imageDisplay.src = "rock.png";
                    win += 1
                    return 
                case "paper":
                    displayMsg.textContent = "It's a draw!";
                    imageDisplay.src = "paper.png";
                    return
                case "scissors":
                    displayMsg.textContent = "You lose! Paper < Scissors! :(";
                    imageDisplay.src = "scissor.png";
                    lose += 1
                    return 
            }
        case "scissors":
            switch (computerSelection){
                case "paper":
                    displayMsg.textContent = "You win! Scissors > Paper!";
                    imageDisplay.src = "paper.png";
                    win += 1
                    return 
                case "scissors":
                    displayMsg.textContent = "It's a draw!";
                    imageDisplay.src = "scissor.png";
                    return
                case "rock":
                    displayMsg.textContent = "You lose! Scissors < Rock! :(";
                    imageDisplay.src = "rock.png";
                    lose += 1
                    return
            }
        }
}

function playGame(){
    for (let i = 0; i < 100; i++) {
        const playerSelection = prompt("What is your choice?").toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (win == 5){
            console.log("Congratulations you won the series!");
            break
        }
        else if (lose == 5) {
            console.log("Get noob");
            break
        }
    }
}



let win = 0;
let lose = 0;

rockChoice.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
})
paperChoice.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
})
scissorChoice.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
})




