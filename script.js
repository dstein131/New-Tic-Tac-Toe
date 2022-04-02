const gameState = {
    players: ['X', 'O'],
    currentTurn: [],
    playerName: ["", ""],
    currentName: [""],
    gameBoard: Array(9).fill(null)
}

var gameBoard = gameState.gameBoard
var currentPlayer = gameState.currentTurn
var currentName = gameState.currentName
var statusBar = document.getElementById("statusBar")

function start() {
    var wrap = document.getElementById("mainWrapper")
    var clear = document.getElementById("hidder")
    clear.style.display = "none"
    wrap.style.display = "flex"
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
    console.log(randomElement)
    currentName = randomElement
    console.log (currentName)
    statusBar.innerText = `It's ${currentName}'s turn`

}

function clicked(e) {

}

