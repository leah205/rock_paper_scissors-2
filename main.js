const scissorsBtn = document.querySelector('.scissors');
const paperBtn = document.querySelector('.paper');
const rockBtn = document.querySelector('.rock');
const objectContainer = document.querySelector('.object-container');
const roundResults = document.querySelector('.round-results');
const gameResults = document.querySelector('.game-results');
const newGameBtn = document.querySelector('.new-game');

function makeCopy(name){
    let original  = document.querySelector(name);
    return original.cloneNode();
    
}

let gameCount = 0;
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

function findWinner(playerSelection, computerSelection){
    if(gameCount === 5){
        return;
    }
    gameCount++;
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


function endGame(){

    if(computerCount > playerCount){
        return `The computer wins with a score of ${computerCount} to ${playerCount}`;
    }
    else if(playerCount > computerCount){
        return `The player wins with a score of ${playerCount} to ${computerCount}`;
    }
    else{
        return `Its a tie! The score is ${playerCount} to ${computerCount}`;
    }


}

function clickBtn(btn){

    if(gameCount == 5) return;

    let computerSelection = getComputerChoice();
    roundResults.textContent = findWinner(btn, computerSelection);

    removeChildren(objectContainer);
    
    objectContainer.appendChild(makeCopy('.' + btn + '-img'));
    objectContainer.appendChild(makeCopy('.' + computerSelection + '-img'));
    if(gameCount === 5){
        gameResults.textContent = endGame();
        
    }
}

function resetVariables(){
    gameCount = 0;
    playerCount = 0;
    computerCount = 0;

}

function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}
function resetGame(){
    removeChildren(objectContainer);
    resetVariables();
    roundResults.textContent = '';
    gameResults.textContent = '';
}


scissorsBtn.addEventListener('click', () => {
    clickBtn('scissors')
});


rockBtn.addEventListener('click', () => {
    clickBtn('rock')
});
   
paperBtn.addEventListener('click', () => {
    clickBtn('paper')
});

newGameBtn.addEventListener('click', () =>{
    resetGame();
})









