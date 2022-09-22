
let playerCount = 0;
let computerCount = 0;
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
    else {
        return false;
    }

}

function playRound(playerSelection, computerSelection){
    if(checkWin(playerSelection, computerSelection) === true){
        playerCount++;
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if(checkWin(computerSelection, playerSelection) === true){
        computerCount++;
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }

    else{
        return(`It's a tie! You both picked ${playerSelection}`)
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt('What do you choose?', '');
        console.log(playRound(playerSelection.toLowerCase(), getComputerChoice()));
    }
    if(computerCount > playerCount){
        console.log(`The computer wins with a score of ${cpmputerCount} to ${playerCount}`);
    }
    else if(playerCount > computerCount){
        console.log(`You win with a score of ${playerCount} to ${computerCount}`);
    }
    else{
        console.log(`Its a tie! The score is ${playerCount} to ${computerCount}`)
    }
    

}
game();



