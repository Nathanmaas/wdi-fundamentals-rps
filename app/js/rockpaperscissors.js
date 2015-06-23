////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    if (move === true) {
    }
    else {
        move = getInput();
    }
    return move;
}

function getComputerMove(move) {
    if (move === true) {
    }
    else {
        move = randomPlay();
    }
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === computerMove) {
        winner = 'tie';
        return 'Tied Game!';
    }else if (playerMove = 'rock' &&& computerMove = 'scissors'); {
        winner = 'player';
        return 'You Won';
    }else if (playerMove = 'paper' &&& computerMove = 'rock'); {
        winner = 'player';
        return 'You Won';
    }else if (playerMove = 'scissors' &&& computerMove = 'paper'); {
        winner = 'player';
        return 'You Won';
    }else {
        return 'Computer Wins';
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

