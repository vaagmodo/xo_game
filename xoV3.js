const player1 = 'x' // defining the x 
const player2 = 'o' // defining the o
const gameWinningPossibility = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] // defining the possibilities where game can be win.

let chance = player1 // player 1 turn so switching the turn between 2 players.
let player1Score = 0 // score of the game won by player 1  
let player2Score = 0 // score of the game won by player 2
let gameNumber = 1 // which number of the game is currently playing.
let gameWinner // who will be the winner of the game


const scores = document.getElementById("playerScore")


function swapChance() {
    if (chance === player1) {
        chance = player2
    }
    else {
        chance = player1
    }
}



scores.innerHTML = (`${player1Score} - ${player2Score}`) // output the total number of game won by players.