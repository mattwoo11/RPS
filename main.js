let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    num = Math.floor(Math.random() * 3) +1;

    if(num === 1){
        let result = "rock";
        console.log(`Computer chose: ${result}`);
        return result;
    }
    else if(num === 2){
        let result = "paper";
        console.log(`Computer chose: ${result}`);
        return result;
    }
    else{
        let result = "scissors";
        console.log(`Computer chose: ${result}`);
        return result;
    }
}

function getHumanChoice() {
    let user = prompt("Choose rock, paper, or scissors.").toLowerCase();
    console.log(`You chose: ${user}`);
    return user;
}

function playRound(humanChoice, computerChoice) {

        if(humanChoice === computerChoice){
            return console.log("It is a Tie!")
        }
    
        if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return console.log("You Win!");
        } else {
            computerScore++;
            return console.log("You Lose!");
        }
    



}

function playGame() {
    let humanselect = getHumanChoice();
    let computerselect = getComputerChoice();

   
     playRound(humanselect, computerselect);

    console.log(`player score is ${humanScore} and computer score is ${computerScore}`);
}




playGame();
playGame();
playGame();
playGame();
playGame();