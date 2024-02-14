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
                    console.log("You win! Rock > Scissors!");
                    win += 1
                    return 
                case "rock":
                    console.log("It's a draw!");
                    return
                case "paper":
                    console.log("You lose! Rock < Paper! :(");
                    lose += 1
                    return 
            }
        case "paper":
            switch (computerSelection){
                case "rock":
                    console.log("You win! Paper > Rock!");
                    win += 1
                    return 
                case "paper":
                    console.log("It's a draw!");
                    return
                case "scissors":
                    console.log("You lose! Paper < Scissors! :(");
                    lose += 1
                    return 
            }
        case "scissors":
            switch (computerSelection){
                case "paper":
                    console.log("You win! Scissors > Paper!");
                    win += 1
                    return 
                case "scissors":
                    console.log("It's a draw!");
                    return
                case "rock":
                    console.log("You lose! Scissors < Rock! :(");
                    lose += 1
                    return
            }
        }
}

const playerSelection = "rock";
let computerSelection = getComputerChoice();
let win = 0;
let lose = 0;

