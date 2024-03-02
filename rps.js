const rockChoice = document.querySelector(".rock");
const paperChoice = document.querySelector(".paper");
const scissorChoice = document.querySelector(".scissors");
const displayMsg = document.querySelector(".battleArea p");
let downwards = document.querySelector(".battleArea img");


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
let emojiSpan = document.createElement('span');  
let spanUpdate = document.querySelector("span");
    switch (playerSelection){
        case "rock":
            switch (computerSelection){
                case "scissors":
                    displayMsg.textContent = "You win! Rock > Scissors!";
                    if (downwards) {
                        emojiSpan.textContent = "✌️";
                        downwards.parentNode.appendChild(emojiSpan);
                        downwards.remove();
                        downwards = null;
                    }
                    else {
                        emojiSpan.textContent = "✌️";
                        spanUpdate.appendChild(emojiSpan);
                    }
                    win += 1
                    break 
                case "rock":
                    displayMsg.textContent = "It's a draw!";
                    if (downwards) {

                        emojiSpan.textContent = "👊";
                        downwards.parentNode.appendChild(emojiSpan);
                        downwards.remove();
                        downwards = null;
                    }
                    else {

                        emojiSpan.textContent = "👊";
                        spanUpdate.appendChild(emojiSpan);
                    }
                    break
                case "paper":
                    displayMsg.textContent = "You lose! Rock < Paper! :(";
                    if (downwards) {

                        emojiSpan.textContent = "✋";
                        downwards.parentNode.appendChild(emojiSpan);
                        downwards.remove();
                        downwards = null;
                    }
                    else {

                        emojiSpan.textContent = "✋";
                        spanUpdate.appendChild(emojiSpan);
                    }
                    lose += 1
                    break
            }
        case "paper":
            switch (computerSelection){
                case "rock":
                    displayMsg.textContent = "You win! Paper > Rock!";
                    if (downwards) {

                        emojiSpan.textContent = "👊";
                        downwards.parentNode.appendChild(emojiSpan);
                        downwards.remove();
                        downwards = null;
                    }
                    else {

                        emojiSpan.textContent = "👊";
                        spanUpdate.appendChild(emojiSpan);
                    }
                    win += 1
                    break 
                case "paper":
                    displayMsg.textContent = "It's a draw!";
                    if (downwards) {

                        emojiSpan.textContent = "✋";
                        downwards.parentNode.appendChild(emojiSpan);
                        downwards.remove();
                        downwards = null;
                    }
                    else {

                        emojiSpan.textContent = "✋";
                        spanUpdate.appendChild(emojiSpan);
                    }
                    break
                case "scissors":
                    displayMsg.textContent = "You lose! Paper < Scissors! :(";
                    if (downwards) {

                        emojiSpan.textContent = "✌️";
                        downwards.parentNode.appendChild(emojiSpan);
                        downwards.remove();
                        downwards = null;
                    }
                    else {

                        emojiSpan.textContent = "✌️";
                        spanUpdate.appendChild(emojiSpan);
                    }
                    lose += 1
                    break 
            }
        case "scissors":
            switch (computerSelection){
                case "paper":
                    displayMsg.textContent = "You win! Scissors > Paper!";
                    if (downwards) {

                        emojiSpan.textContent = "✋";
                        downwards.parentNode.appendChild(emojiSpan);
                        downwards.remove();
                        downwards = null;
                    }
                    else {

                        emojiSpan.textContent = "✋";
                        spanUpdate.appendChild(emojiSpan);
                    }
                    win += 1
                    break 
                case "scissors":
                    displayMsg.textContent = "It's a draw!";
                    if (downwards) {

                        emojiSpan.textContent = "✌️";
                        downwards.parentNode.appendChild(emojiSpan);
                        downwards.remove();
                        downwards = null;
                    }
                    else {

                        emojiSpan.textContent = "✌️";
                        spanUpdate.appendChild(emojiSpan);
                    }
                    break
                case "rock":
                    displayMsg.textContent = "You lose! Scissors < Rock! :(";
                    if (downwards) {
                        emojiSpan.textContent = "👊";
                        downwards.parentNode.appendChild(emojiSpan);
                        downwards.remove();
                        downwards = null;
                    }
                    else {
                        emojiSpan.textContent = "👊";
                        spanUpdate.appendChild(emojiSpan);
                    }
                    lose += 1
                    break
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
    playRound("rock", getComputerChoice())});
paperChoice.addEventListener("click", () => {
    playRound("paper", getComputerChoice())});
scissorChoice.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())});



