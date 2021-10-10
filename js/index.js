//set up some variables
const noOfSquares = 50
const gridWidth = 5
const gridSquareSize = 50
let squares = []
let activeWordCurrentPos = 0
let tileISActive = false
const word = ['thorough']
const targetWords = ['cough', 'rough', 'through', 'though', 'burrough']


//grab the grid div
const grid = document.getElementsByClassName('grid')[0]

//create the grid
function createGrid() {
    for (let i = 0; i < noOfSquares; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        square.innerText = ''
        squares.push(square)
    }
    populateGrid()
}
createGrid()

//populate the grid
function populateGrid() {
    let j = 0
    for (let i = noOfSquares - gridWidth; i < noOfSquares; i++) {
        squares[i].innerText = targetWords[j]
        j++
    }
    const ranNum = Math.floor(Math.random() * 5)
    squares[ranNum].innerText = word[0]
    squares[ranNum].classList.add('active')
    activeWordCurrentPos = ranNum
}

//start the game
function start() {
    //iterate over squares and - gridWidth
    tileISActive = true
    const activeWordTimer = setInterval(() => {
        if (activeWordCurrentPos < noOfSquares - gridWidth * 2) {
            squares[activeWordCurrentPos].innerText = ""
            squares[activeWordCurrentPos].classList.remove('active')
            squares[activeWordCurrentPos + gridWidth].innerText = word[0]
            squares[activeWordCurrentPos + gridWidth].classList.add('active')
            activeWordCurrentPos += gridWidth
        }
    }, 500)
}

//set up eventListeners for controls
document.addEventListener('keydown', assignMoveKeys) //desktop only

let buttonLeft = document.getElementById('left')
let buttonRight = document.getElementById('right')
buttonLeft.addEventListener('click', assignMoveMobile)
buttonRight.addEventListener('click', assignMoveMobile)

function assignMoveKeys(e) {
    const keyCode = e.keyCode
    controlWord(keyCode)
}

function assignMoveMobile(e) {
    const keyCode = parseInt(document.getElementById(e.target.id).dataset.keyCode)
    controlWord(keyCode)
}

// control falling word
function controlWord(keyCode) {

    if (activeWordCurrentPos > noOfSquares -11){
        setTimeout(()=>{
            tileISActive = false
        },300)
    }

    switch (keyCode) {
        case 37:
            if (activeWordCurrentPos - 1 <= 44 && activeWordCurrentPos % 5 !== 0 && tileISActive) {
                squares[activeWordCurrentPos].classList.remove('active')
                squares[activeWordCurrentPos].innerText = ''
                squares[activeWordCurrentPos - 1].innerText = word[0]
                squares[activeWordCurrentPos - 1].classList.add('active')
                activeWordCurrentPos -= 1
            }
            break
        case 39:
            if (activeWordCurrentPos + 1 <= 44 && (activeWordCurrentPos + 1) % 5 !== 0 && tileISActive) {
                squares[activeWordCurrentPos].classList.remove('active')
                squares[activeWordCurrentPos].innerText = ''
                squares[activeWordCurrentPos + 1].innerText = word[0]
                squares[activeWordCurrentPos + 1].classList.add('active')
                activeWordCurrentPos += 1
            }
            break
    }



}

