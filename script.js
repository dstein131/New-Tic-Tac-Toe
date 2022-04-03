const gameState = {
    players: ['X', 'O'],
    currentTurn: [],
    playerName: ["", ""],
    currentName: [], // this is returning null check into it later
    moves: [0],
    gameBoard: Array(9).fill(null),
    isComputer: ["Yes", "No"],
    computerState: [""]
}

var computerState = gameState.computerState
var players = gameState.players
var gameBoard = gameState.gameBoard
var currentTurn = gameState.currentTurn
var currentName = gameState.currentName
var playerNames = gameState.playerName
var moves = gameState.moves
var statusBar = document.getElementById("statusBar")

function start() {
    document.querySelectorAll('.cell').forEach(item => item.addEventListener('click', clicked))
    var wrap = document.getElementById("mainWrapper")
    var clear = document.getElementById("hidder")
    clear.style.display = "none"
    wrap.style.display = "flex"
    currentTurn = gameState.players[0]
    getNames()
    randomlyChooseName()
    isComputer()
    
}

function getNames() {
    let first = document.getElementById("firstName")
    let second = document.getElementById("secondName")
    gameState.playerName[0] = first.value
    if (second.value === "") {
        gameState.playerName[1] = "Computer"
        gameState.computerState = "Yes"
    }
    else {
        gameState.playerName[1] = second.value
        gameState.computerState = "No"
    }
    console.log(gameState.computerState)
}

function randomlyChooseName() {
    const randomElement = gameState.playerName[Math.floor(Math.random() * gameState.playerName.length)];
    currentName = randomElement
    statusBar.innerText = `It's ${currentName}'s turn`
}

function clicked(e) {
    markBox(e)
    checkIfWin()
    checkDrawChecker()
    // checkDraw()
    
}

function markBox(e) {
    let target = e.target
    let marker = e.target.id
    let inner = e.target.innerText
    if (!checkWin()) {
        if (inner === "") {
            target.innerText = currentTurn
            gameBoard[marker] = currentTurn
            moves++ 
            console.log(moves)  
            swapTurn()
            swapName()
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


function checkDraw() {
    if (moves === 9) {
        return(true)
    } else {
        return(false)
    }
}
     
function checkDrawChecker() {
    if (!checkWin()) {
        if (checkDraw()) {
            statusBar.innerText = "It's a draw!"
        }
    }
}

function reset() {
    console.log(moves)
    gameBoard = Array(9).fill(null)
    document.querySelectorAll('.cell').forEach(item => item.innerText = "")
    randomlyChooseName()
    statusBar.innerText = `It's ${currentName}'s turn`
    currentTurn = gameState.players[0]
    moves = 0
    console.log(currentTurn)
    console.log(gameBoard)
    console.log(moves)

}

function changePlayers() {
    gameBoard = Array(9).fill(null)
    currentTurn = gameState.players[0]
    moves = 0
    document.querySelectorAll('.cell').forEach(item => item.innerText = "")
    var wrap = document.getElementById("mainWrapper")
    // var clear = document.getElementById("hidder")
    // clear.style.display = "block"
    wrap.style.display = "none"
    document.getElementById("startScreen").style.display = "flex"
    document.getElementById("firstName").value = ""
    document.getElementById("secondName").value = ""

}

function onePlayer() {
    document.getElementById("startScreen").style.display = "none"
    document.getElementById("hidder").style.display = "block"
    document.getElementById("secondPlayer").style.display = "none"
}

function twoPlayer() {
    document.getElementById("startScreen").style.display = "none"
    document.getElementById("hidder").style.display = "block"
    document.getElementById("secondPlayer").style.display = "flex"
}

function isComputer() {
    if (gameState.computerState === "Yes") {
        console.log("true")
        return(true)
    } 
    else {
        console.log("false")
        return(false)
    }
}