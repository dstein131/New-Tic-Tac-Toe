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
    console.log(currentTurn)
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
    console.log(randomElement)
    currentName = randomElement
    console.log (currentName)
    statusBar.innerText = `It's ${currentName}'s turn`
}

function clicked(e) {
    markBox(e)
}

function markBox(e) {
    let target = e.target
    let marker = e.target.id
    let inner = e.target.innerText
    if (inner === "") {
        target.innerText = currentTurn
        gameBoard[marker] = currentTurn   
        console.log(gameBoard)
        swapName()
        swapTurn()
    }    
}



function swapTurn() {
    if (currentTurn === players[0]) {
        currentTurn = players[1]
    }
    else {
        currentTurn = players[0]
    }
    console.log(currentTurn)
}

function swapName() {
    if (currentName === playerNames[0]) {
        currentName = playerNames[1]
    }
    else {
        currentName = playerNames[0]
    }
    console.log(currentName)
}