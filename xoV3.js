class Event {
    constructor() {
        this.listeners = []
    }

    addListener(listener) {
        this.listeners.push(listener)
    }

    trigger(args) {
        for (let i = 0; i < this.listeners.length; i++) {
            listener[args]
        }
    }
}

class Model {
    constructor() {
        this.ticTacToe = Array(9).fill();
        this.currentPlayer = 'x'
        this.gameFinished = false
        this.player1Score = 0
        this.player2Score = 0
        this.gameNumber = 0

        this.startGameEvent = new Event()
        this.restartGameEvent = new Event()
        this.updateCellsEvent = new Event()
        this.playerScoreEvent = new Event()
        this.gameWinnerEvent = new Event()
        this.gameDrawEvent = new Event()
    }

    startGame(cellIndex) {
        if (this.gameFinished || cellIndex > 8 || cellIndex < 0 || this.ticTacToe[cellIndex]) {
            return false
        }
        this.ticTacToe[cellIndex] = this.currentPlayer

        this.gameFinished = this.gameWinner() || this.gameDraw()

        if (!this.gameFinished) {
            this.switchCurrentPlayer()
        }

        return true
    }

    gameWinner() {
        const gameWinningPossibility = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        const gameWon = gameWinningPossibility.some(possibility => this.ticTacToe[possibility[0]] && this.ticTacToe[possibility[0]] === this.ticTacToe[possibility[1]] && this.ticTacToe[possibility[1]] === this.ticTacToe[possibility[2]])
        if (gameWon) {
            this.gameWinnerEvent.trigger(this.currentPlayer)
        }

        this.currentPlayer === 'x' ? this.player1Score++ : this.player2Score++

        return gameWon
    }

    gameDraw() {
        const draw = this.ticTacToe.every(cell => cell)

        if (draw) {
            this.gameDrawEvent.trigger()
        }

        return draw
    }

    switchCurrentPlayer() {
        // Initally current player is X
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x'
    }
}

class View {
    constructor() {

    }

    // accessingHTMLelements() {
    //     const startGame = document.getElementById("gameStartButtonId")
    //     const restartGame = document.getElementById("restartButtonId")
    //     const board = document.getElementById("grid3X3")
    //     const cells = document.getElementsByClassName("cells")
    //     const scores = document.getElementById("playerScore")
    //     const gameWinningMessage = document.getElementById("winningMessageId")
    // }
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