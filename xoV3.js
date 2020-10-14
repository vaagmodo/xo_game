// const player1 = 'x' // defining the x 
// const player2 = 'o' // defining the o
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
const player1 = []
const player2 = []
// let playerOne
// let playerTwo
let chance = 1 // player 1 turn so switching the turn between 2 players.
let playerOneTurn = true
let player1Score = 0 // score of the game won by player 1  
let player2Score = 0 // score of the game won by player 2
let gameNumber = 1 // which number of the game is currently playing.
let gameWinner // who will be the winner of the game
let tikTokToe = []


// input = parseInt(window.prompt("enter "))
// player1.push(input)
// tikTokToe.push(input)
// console.log(player1)
// console.log(player2)
// console.log(tikTokToe)



// const scores = document.getElementById("playerScore")

class Model {
    constructor() {

    }

    swapChance() {
        // initally playerOneTurn is True
        playerOneTurn = !playerOneTurn
        console.log(playerOneTurn)
    }

    playerChance() {
        //initally chance is 1 it means it's X's chance at inital
        playerOneTurn == 1 ? chance = 1 : chance = 0 // 1 means X's chance and 0 means O's chance
        console.log(chance)
    }
}

class View {
    constructor() { }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

const app = new Controller(new Model(), new View())

// function swapChance() {
//     if (chance === player1) {
//         chance = player2
//     }
//     else {
//         chance = player1
//     }
// }



// scores.innerHTML = (`${player1Score} - ${player2Score}`) // output the total number of game won by players.

// model
//     removeOldMark()
//     checkPlayerTurn()
//     turnSwaping()
//     drawGame()
//     checkGameWinner()
//     endGame()

// view


// controller
//     handleClick()
//     cellMark()
//     userClicked()
//     startGame()
//     restartGame()


