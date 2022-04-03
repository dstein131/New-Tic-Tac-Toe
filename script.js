const gameState = {
    players: ['X', 'O'],
    currentTurn: [],
    playerName: ["", ""],
    currentName: [],
    gameBoard: Array(9).fill(null)
}

var players = gameState.players
var gameBoard = gameState.gameBoard
var currentTurn = gameState.currentTurn
var currentName = gameState.currentName
var playerNames = gameState.playerName
var statusBar = document.getElementById("statusBar")

function start() {
    var wrap = document.getElementById("mainWrapper")
    var clear = document.getElementById("hidder")
    clear.style.display = "none"
    wrap.style.display = "flex"
    currentTurn = gameState.players[0]
    getNames()
    randomlyChooseName()
    document.querySelectorAll('.cell').forEach(item => item.addEventListener('click', clicked))
}

function getNames() {
    let first = document.getElementById("firstName")
    let second = document.getElementById("secondName")
    gameState.playerName[0] = first.value
    if (second.value === "") {
        gameState.playerName[1] = "Computer"
    }
    else {
        gameState.playerName[1] = second.value
    }
}

function randomlyChooseName() {
    const randomElement = gameState.playerName[Math.floor(Math.random() * gameState.playerName.length)];
    currentName = randomElement
    statusBar.innerText = `It's ${currentName}'s turn`
}

function clicked(e) {
    markBox(e)
    checkIfWin()
    swapTurn()
    swapName()
}

function markBox(e) {
    let target = e.target
    let marker = e.target.id
    let inner = e.target.innerText
    if (!checkWin()) {
        if (inner === "") {
            target.innerText = currentTurn
            gameBoard[marker] = currentTurn   
            console.log(gameBoard) 
            console.log(currentName)
            console.log(currentTurn)
        } 
    }  
}

function swapTurn() {
    if (!checkWin()) {
        if (currentTurn === players[0]) {
            currentTurn = players[1]
        }
        else {
            currentTurn = players[0]
        }
    }
}

function swapName() {
    if (!checkWin()) {
        if (currentName === playerNames[0]) {
            currentName = playerNames[1]
        }
        else {
            currentName = playerNames[0]
        }
        statusBar.innerText = `It's ${currentName}'s turn`
    }
}

function checkWin() {
    if (gameBoard[0] === currentTurn && gameBoard[1] === currentTurn && gameBoard[2] === currentTurn) {
        return(true)  
    }
    if (gameBoard[3] === currentTurn && gameBoard[4] === currentTurn && gameBoard[5] === currentTurn) {
        return(true)
    }
    if (gameBoard[6] === currentTurn && gameBoard[7] === currentTurn && gameBoard[8] === currentTurn) {
        return(true)
    }
    if (gameBoard[0] === currentTurn && gameBoard[3] === currentTurn && gameBoard[6] === currentTurn) {
        return(true)
    }
    if (gameBoard[1] === currentTurn && gameBoard[4] === currentTurn && gameBoard[7] === currentTurn) {
        return(true)
    }
    if (gameBoard[2] === currentTurn && gameBoard[5] === currentTurn && gameBoard[8] === currentTurn) {
        return(true)
    }
    if (gameBoard[0] === currentTurn && gameBoard[4] === currentTurn && gameBoard[8] === currentTurn) {  
        return(true)
    }
    if (gameBoard[6] === currentTurn && gameBoard[4] === currentTurn && gameBoard[2] === currentTurn) {
        return(true)
    }
    else {
        return(false)
    }
}

function checkIfWin() {
    if (checkWin()) {
        statusBar.innerHTML = `${currentName} has won!`
    }
}


// function checkDraw() {
//     for (i = 0; i < gameBoard.length; i++) {
//         if (gameBoard[i] === null) {
//             return(false)
//         }
//         else {
//             statusBar.innerText = `It's a draw between ${gameState.playerName[0]} & ${gameState.playerName[1]}`
//         }
//     }
// }
