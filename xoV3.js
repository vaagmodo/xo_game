class Event { // sperarate event class that create and trigger handels
    constructor() {
        this.listeners = []
    }
    addListener(listener) { // adding new events 
        this.listeners.push(listener)
    }
    trigger(args) { // trigger event 
        for (let i = 0; i < this.listeners.length; i++) {
            listener[args]
        }
    }
}

class Model { // model class that handels all data parts of the project
    constructor() {
        this.ticTacToe = Array(9).fill(); // declare 9 position of the board
        this.currentPlayer = 'x' // points which player turn it is
        this.gameFinished = false // game is finshied or not
        this.player1Score = 0 // player 1 score
        this.player2Score = 0 // player 2 score
        this.gameNumber = 0 // number of game played 

        this.startGameEvent = new Event() // new event for start game
        this.restartGameEvent = new Event() // new event for restart game
        this.updateCellsEvent = new Event() // new event for cell update
        this.playerScoreEvent = new Event() // new event for player score 
        this.gameWinnerEvent = new Event() // new event for game winner
        this.gameDrawEvent = new Event() // new event for draw game
    }
    startGame(cellIndex) { // cellIndex is at which poistion on the board it is between 0-8
        if (this.gameFinished || cellIndex > 8 || cellIndex < 0 || this.ticTacToe[cellIndex]) { // condition if any of this true than game not started
            return false
        }
        this.ticTacToe[cellIndex] = this.currentPlayer // current position at board current players is added
        this.gameFinished = this.gameWinner() || this.gameDraw() // check whether game is finshied or not 
        if (!this.gameFinished) { // condition that if game is not finished than player turn will be switched
            this.switchCurrentPlayer() // player turn switch function called
        }
        return true
    }
    gameWinner() {
        const gameWinningPossibility = [ // this are the winning possibilities of the tic-tac-toe game
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        // game winning condition
        const gameWon = gameWinningPossibility.some(possibility => this.ticTacToe[possibility[0]] && this.ticTacToe[possibility[0]] === this.ticTacToe[possibility[1]] && this.ticTacToe[possibility[1]] === this.ticTacToe[possibility[2]])
        if (gameWon) { // game won true so current player is winner
            this.gameWinnerEvent.trigger(this.currentPlayer)
        }
        return gameWon
    }

    gameDraw() {
        const draw = this.ticTacToe.every(cell => cell) // checking every cell that it is filled 
        if (draw) {
            this.gameDrawEvent.trigger()
        }
        return draw
    }
    switchCurrentPlayer() {
        // Initally current player is X
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x' // current player switch condition
    }

    playerScore() {
        const playerScore = this.currentPlayer === 'x' ? this.player1Score++ : this.player2Score++ // player score is being update
        return playerScore
    }
}
class View {
    constructor() {
    }
    // showGame() {
    //     const board = document.createElement('div')
    //     board.className = 'gameBoard'

    accessingHTMLelements() { // Access HTML DOM elements
        const startGame = document.getElementById("gameStartButtonId")
        const restartGame = document.getElementById("restartButtonId")
        const cells = document.getElementsByClassName("cells")
        const scores = document.getElementById("playerScore")
        const gameWinningMessage = document.getElementById("winningMessageId")
    }

    // restart() {
    //     this.restartGame.addListener(onclick)
    // }

    victory(gameWon) {
        this.gameWinningMessage.innerHTML = `${gameWon} won!` // which is won will be display 
    }

    draw() {
        this.gameWinningMessage.innerHTML = "Game is Draw!!" // game is draw is display
    }
}

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }
}

// model
//     removeOldMark()
//     checkPlayerTurn()
//     turnSwaping()
//     drawGame()
//     checkGameWinner()
//     endGame()

// controller
//     handleClick()
//     cellMark()
//     userClicked()
//     startGame()
//     restartGame()