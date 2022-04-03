function compMove() {
    let computerMoves = []
    let board = gameState.gameBoard
    let problem = gameState.currentTurn
    if (!checkWin() && !checkDraw())
    for (i = 0; i < board.length; i++) {
        if (board[i] === null) {
            computerMoves.push(i)
        }
    }
    randomElement = computerMoves[Math.floor(Math.random() * computerMoves.length)]
    var ranDom = document.getElementById(randomElement)
    statusbar.innerText = problem
    console.log(problem)
    gameBoard[randomElement] = problem
    moves++
}

function checkIfPlayerIsComputer() {
    if (playerNames[1] === "Computer") {
        return(true)
    }
    else {
        return(false)
    }
}

if (checkIfPlayerIsComputer() && currentName === "Computer") {
    compMove()
}