// words move randomly and exit box
// click word to select, click rhyming partner to score point
// needs a grid
// needs classes

//set up some variables
const noOfSquares = 50
const noOfWords = 5
const gridSquareSize = 50 
let squares = []
const round1 = ['dog', 'cat', 'lion', 'fish', 'monkey']

//grab the grid div
const grid = document.getElementsByClassName('grid')[0]

//create the grid
function createGrid(){
    for (let i=0; i< noOfSquares; i++){
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        square.innerText = ''
        squares.push(square)
    }
    populateGrid()   
}
createGrid()

function populateGrid(){
    let j = 0
    for (let i = noOfSquares - noOfWords; i < noOfSquares; i++ ){
        squares[i].innerText = round1[j]
        j++
    }
}

function start(){
//iterate over squares and - noOfWords
for (let i = 0; i < noOfSquares; i++ ){
    if(i< noOfSquares - noOfWords){
        squares[i].innerText = squares[i+5].innerText
        squares[i+5].innerText = ''
    }
}
}

