

function getRandomNum(range){
    return Math.floor(Math.random() * range);
}


function getComputerChoice(){
    let num = getRandomNum(3);
    
    if(num === 0){
        return 'paper';
       
    }
    else if(num === 1){
        return 'rock';
        
    }
    else{
        return 'scissors';
        
    }
}

function checkWin(player, opponent){
    if(player == 'rock' && opponent == 'scissors'){
        return true;
    }
    else if(player == 'paper' && opponent == 'rock'){
        return true;
    }
    else if(player == 'scissors' && opponent == 'paper'){
        return true;
    }
    else{
        return false;
    }

}

function playRound(playerSelection, computerSelection){
    if(checkWin(playerSelection, computerSelection) === true){
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if(checkWin(computerSelection, playerSelection) === true){
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }

    else{
        return(`It's a tie! You both picked ${playerSelection}`)
    }
}

let playerSelection = 'rock';
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


