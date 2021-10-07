//set up some variables
const noOfSquares = 50
const gridWidth = 5
const gridSquareSize = 50
let squares = []
let activeWordCurrentPos = 0
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

function start() {
    //iterate over squares and - gridWidth
    const activeWordTimer = setInterval(() => {
        if (activeWordCurrentPos < noOfSquares-gridWidth) {
            console.log(activeWordCurrentPos);
            squares[activeWordCurrentPos].innerText = ""
            squares[activeWordCurrentPos].classList.add('active')
            squares[activeWordCurrentPos + gridWidth].innerText = word[0]
            squares[activeWordCurrentPos + gridWidth].classList.add('active')
            activeWordCurrentPos += gridWidth
        }

    }, 500)

}

