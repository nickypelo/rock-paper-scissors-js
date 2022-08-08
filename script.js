// function getComputerChoice(){
//     console.log("kota");
// }

// getComputerChoice();

// food = () => {
//     let words = "kota with atchaar";
//     return `I like ${words}`
// }

// console.log(food());

getComputerChoice = () =>{
    const options = ["Rock", "Paper", "Scissors"];
    let rand = Math.random() * options.length;
    let position = Math.floor(rand);

    return options[position];
}

// console.log(getComputerChoice());

playRound = (player, computer)=>{
    let rock= "rock";
    let paper= "paper";
    let scissors= "scissors";

    let player1 = player.toLowerCase();
    let computer1 = computer.toLowerCase();

    if(player1 === computer1){
        return "It is a tie. No one wins!";
    }
    else if((player1 === rock) && (computer1 === paper)) {
        return "You Lose! Paper beats Rock";
    }
    else if((player1 === paper) && (computer1 === rock)){
        return "You Win! Paper beats Rock";
    }
    else if((player1 === scissors) && (computer1 === rock)){
        return "You Lose! Rock beats Scissors";
    }
    else if((player1 === rock) && (computer1 === scissors)){
        return "You Win! Rock beats Scissors";
    }
    else if((player1 === paper) && (computer1 === scissors)){
        return "You Lose! Rock beats Scissors";
    }
    else if((player1 === scissors) && (computer1 === paper)){
        return "You Win! Rock beats Scissors";
    }
    else {
        return `Make a valid entry between Rock, Paper, Scissors`;

    }


}

// let playerSelection = getComputerChoice();
// let computerSelection = getComputerChoice();


// console.log(`Player has played ${playerSelection}`);
// console.log(`Computer has generated ${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));


game = () =>{
    for(let i = 0; i <5; i++){
        let playerOne = prompt("Rock, Paper or Scissors?");
        let result = playRound(playerOne,getComputerChoice());
        console.log(`For round ${i+1} ${result}`);
        
        // while(result.substring(0,5) === "Make"){
        //     let ask = prompt("Rock, Paper or Scissors?");
        // }
        
    }
}

game();
