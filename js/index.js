//set up some variables
const noOfSquares = 50
const gridWidth = 5
const gridSquareSize = 50
let squares = []
let originalSpeed = 500
let speed = 500
let activeWordCurrentPos = 0
let tileISActive = false
let set = 0
let setMax = 0
let wordsToPlay = []
let targetWords = []
let points = 0

//fetch data
function fetchData() {
    fetch('./data/words.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.words[set].wordsToPlay)
            wordsToPlay = data.words[set].wordsToPlay
            function shuffle(array) { // put target words in random order
                return array.sort(() => Math.random() - 0.5);
              }
            targetWords = shuffle(data.words[set].targetWords)
            setMax = data.words.length
            populateGrid()
        })
}
fetchData()


//grab the divs
const grid = document.getElementsByClassName('grid')[0]
const modal = document.getElementsByClassName('modal')[0]
const messageDisplay = document.getElementsByClassName('message')[0]
const pointsDisplay = document.getElementsByClassName('points')[0]
const startBtn = document.getElementsByClassName('start-btn')[0]

//create the grid
function createGrid() {
    for (let i = 0; i < noOfSquares; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        square.innerText = ''
        squares.push(square)
    }
    pointsDisplay.innerText = points

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
    squares[ranNum].innerText = wordsToPlay[0]
    squares[ranNum].classList.add('active')
    activeWordCurrentPos = ranNum
}

//start the game
function start() {
    //iterate over squares and - gridWidth
    modal.style.display = 'none';
    tileISActive = true
    const activeWordTimer = setInterval(() => {
        if (activeWordCurrentPos < noOfSquares - gridWidth * 2) {
            squares[activeWordCurrentPos].innerText = ""
            squares[activeWordCurrentPos].classList.remove('active')
            squares[activeWordCurrentPos + gridWidth].innerText = wordsToPlay[0]
            squares[activeWordCurrentPos + gridWidth].classList.add('active')
            activeWordCurrentPos += gridWidth
        }
        else {
            clearInterval(activeWordTimer)
            tileISActive = false
            calculatePoints()
        }
    }, speed)
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

    if (activeWordCurrentPos > noOfSquares - 11) {
        setTimeout(() => {
            tileISActive = false
        }, 300)
    }

    switch (keyCode) {
        case 37:
            if (activeWordCurrentPos - 1 <= 44 && activeWordCurrentPos % 5 !== 0 && tileISActive) {
                squares[activeWordCurrentPos].classList.remove('active')
                squares[activeWordCurrentPos].innerText = ''
                squares[activeWordCurrentPos - 1].innerText = wordsToPlay[0]
                squares[activeWordCurrentPos - 1].classList.add('active')
                activeWordCurrentPos -= 1
            }
            break
        case 39:
            if (activeWordCurrentPos + 1 <= 44 && (activeWordCurrentPos + 1) % 5 !== 0 && tileISActive) {
                squares[activeWordCurrentPos].classList.remove('active')
                squares[activeWordCurrentPos].innerText = ''
                squares[activeWordCurrentPos + 1].innerText = wordsToPlay[0]
                squares[activeWordCurrentPos + 1].classList.add('active')
                activeWordCurrentPos += 1
            }
            break
    }
}

function calculatePoints() {
    if (wordsToPlay[1] === squares[activeWordCurrentPos + 5].innerText) {
        points++
        pointsDisplay.innerText = points
        messageDisplay.innerText = 'Good!'
        speed = speed*0.95
        startNextSet() 
    }
    else {
        console.log('finished');
        messageDisplay.innerText = `Game Over! You got ${points} points`
        startBtn.innerText='Play again?';
        modal.style.display = 'flex';
        reset()
        // game over here????
    }
    //start next set


}

function startNextSet() {
    //clearwords
    squares[activeWordCurrentPos].classList.remove('active')
    squares[activeWordCurrentPos].innerText = ''
    //get new word
    set++
    //restart
    if (set < setMax){
        fetchData()
        start()
    }
    else{
        console.log('finished');
        messageDisplay.innerText = `Game Over! You win with ${points} points!`
        modal.style.display = 'flex';
        startBtn.innerText='Play again?';
        reset()
    }
}

function reset(){
    squares[activeWordCurrentPos].classList.remove('active')
    squares[activeWordCurrentPos].innerText = ''
    set = 0
    points = 0
    speed = originalSpeed
    fetchData()
    pointsDisplay.innerText = 0
}

