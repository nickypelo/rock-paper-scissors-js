
/*----------- RANDOMIZE THE COMPUTER'S PLAY -----------------*/
getComputerChoice = () =>{
    const choice = ["rock", "paper", "scissors"];
    let rand = Math.random() * choice.length;
    let position = Math.floor(rand);

    return choice[position];
}



/*------------ FUNCTION THAT HANDLES THE USER'S SELECTION ------------ */
playRound = (user, computer)=>{
    if(user === computer){
        return "It is a tie. No one wins!";
    }
    else if((user === 'rock') && (computer === 'paper')) {
        return "You Lose! Paper beats Rock";
    }
    else if((user === 'paper') && (computer === 'rock')){
        return "You Win! Paper beats Rock";
    }
    else if((user === 'scissors') && (computer === 'rock')){
        return "You Lose! Rock beats Scissors";
    }
    else if((user === 'rock') && (computer === 'scissors')){
        return "You Win! Rock beats Scissors";
    }
    else if((user === 'paper') && (computer === 'scissors')){
        return "You Lose! Rock beats Scissors";
    }
    else if((user === 'scissors') && (computer === 'paper')){
        return "You Win! Rock beats Scissors";
    }
    else {
        return `Make a valid entry between Rock, Paper, Scissors`;
    }

}




// Select buttons
const options = document.querySelectorAll('.btn'); // select rock paper scissors buttons by class
const play = document.querySelector('.play');




// display changes
const selected = document.querySelector('.selected');
const results = document.querySelector('.results');
const winner = document.querySelector('.winner');




// ROUND COUNTERS: THESE VARIABLES WILL BE  PLACE HOLDERS FOR THE ROUNDS, WINS AND LOSSES OF THOSE ROUNDS
let count = 0;
let wins = 0;
let loss = 0;




// FUNCTION THAT INCREMENTS WINS AND LOSSES
outcome = (result) =>{
    if(result.substring(0,7) === 'You Win'){
        wins++;
    }
    else if(result.substring(0,8) === "You Lose"){
        loss++;
    }
    else if((result.substring(0,2) === "It")){
        
    }    
    else{
        count--;
    }
}



// FUNCTION THAT DISPLAYS THE FINAL WINNER
overallWinner = () =>{
    if(wins == 5){
        winner.textContent = `The world is yours. You win it all after ${count} rounds.`;
        reset();
    }
    else if(loss == 5){
        winner.textContent = `You lose! After ${count} rounds, We are doomed. Led by a loser`;
        reset();
    }
}



// RESET AFTER WINNER IS ANNOUNCED
reset = () =>{
    wins = 0;
    loss = 0;
    count = 0;
    selected.textContent = '?';
}




// USER OPTIONS DISPLAYED 
options.forEach((button) =>{
    button.addEventListener('click', ()=>{
        selected.textContent = button.id;
        results.textContent = ''; // refreshes round results
        winner.textContent= ''; // refreshes and resets overall winner after announcement
    })
})




//BUTTON THAT PLAYS THE GAME.
play.addEventListener('click', ()=>{
    winner.textContent = '';
    let user = selected.textContent; //receives input from the user after they select the button with options.
    let result = playRound(user, getComputerChoice()); // uses the 
    outcome(result);
    count++;
    results.textContent = `For round ${count} ${result}`;
    overallWinner();
    
});
