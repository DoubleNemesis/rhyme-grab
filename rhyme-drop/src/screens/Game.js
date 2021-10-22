import { useEffect } from 'react'
import styled from 'styled-components'
import NavigationBlock from '../components/NavigationBlock'
import { GameContainer } from './gameComponents/GameComponents'


export default function Game(props) {
    const noOfSquares = 50
    let grid
    const gridWidth = 5
    let cells = []
    let targetWords = []
    let setMax = 0
    let set = 0
    let wordsToPlay = []
    let activeWordCurrentPos = 0
    let countDown
    let speed = 500
    let tileISActive = false
    let points = 0
    let level = 1
    let pointsDisplay
    let levelDisplay
    const originalSpeed = 500
    const originalevel = 1


    //create the grid
    function createGrid() {
        grid = document.getElementsByClassName('grid')[0]
        countDown = document.getElementsByClassName('count-down')[0]
        pointsDisplay = document.getElementsByClassName('points')[0]
        levelDisplay = document.getElementsByClassName('level')[0]
        for (let i = 0; i < noOfSquares; i++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.innerText = ''
            grid.appendChild(cell)
            cells.push(cell)
        }
        // pointsDisplay.innerText = points
    }

    function fetchData(){
        fetch('./data/words.json')
        .then(response => response.json())
        .then(data => {
            console.log(1, data);
            wordsToPlay = data.words[set].wordsToPlay
            function shuffle(array) { // put target words in random order
                return array.sort(() => Math.random() - 0.5);
            }
            targetWords = shuffle(data.words[set].targetWords)
            setMax = data.words.length
            populateGrid()
        })

    }


    useEffect(() => {
        createGrid()
    })

    //fetch data
    useEffect(() => {
    fetchData()
    })

    //populate the grid
    function populateGrid() {
        let j = 0
        for (let i = noOfSquares - gridWidth; i < noOfSquares; i++) {
            cells[i].innerText = targetWords[j]
            j++
        }
        const ranNum = Math.floor(Math.random() * 5)
        cells[ranNum].innerText = wordsToPlay[0]
        cells[ranNum].classList.add('active')
        activeWordCurrentPos = ranNum
        go()
    }

    //start the countdown
    function go() {
        let timeLeft = 2
        const countDownTimer = setInterval(() => {
            if (timeLeft > 0) {
                countDown.innerText = timeLeft
                timeLeft--
            }
            else {
                clearInterval(countDownTimer)
                countDown.innerText = ''
                start()
            }

        }, 1000)
    }

    //start the drop
    function start() {
        tileISActive = true
        const activeWordTimer = setInterval(() => {
            if (activeWordCurrentPos < noOfSquares - gridWidth * 2) {
                cells[activeWordCurrentPos].innerText = ""
                cells[activeWordCurrentPos].classList.remove('active')
                cells[activeWordCurrentPos + gridWidth].innerText = wordsToPlay[0]
                cells[activeWordCurrentPos + gridWidth].classList.add('active')
                activeWordCurrentPos += gridWidth
            }
            else {
                clearInterval(activeWordTimer)
                tileISActive = false
                calculatePoints()
            }
        }, speed)
    }

    function calculatePoints() {
        if (wordsToPlay[1] === cells[activeWordCurrentPos + 5].innerText) {
            points++
            if (points % 4 === 0) {
                level++
                speed = speed * 0.98
            }
            pointsDisplay.innerText = points
            levelDisplay.innerText = level
            // startNextSet()
        }
        else {
            // game over
            cells[activeWordCurrentPos].classList.add('wrong')
            setTimeout(() => {
                document.getElementsByClassName('wrong')[0].classList.remove('wrong')
                //     endMessageText.innerHTML = `
                //     <h2 class="end_headline">Game Over!</h2> 
                //     <p class="intro_text">You should have matched </p> 
                //     <div class="intro_word"> ${wordsToPlay[0]}</div>
                //     <div class="intro_text">with </div>
                //     <div class="intro_word">${wordsToPlay[1]}</div>
                //     <p class="intro_text">You got ${points} points</p>
                // `

                // endMessageDisplay.style.display = 'flex';
                //     endBtn.innerText = 'Play again?';
                //     endBtn.addEventListener('click', reset)
                // reset()
            }, 1000)


        }
    }

    function startNextSet() {
        //clearwords
        cells[activeWordCurrentPos].classList.remove('active')
        //make tile show success and then remove it
        cells[activeWordCurrentPos].classList.add('right')
        setTimeout(() => {
            document.getElementsByClassName('right')[0].classList.remove('right')
        }, 250)
        cells[activeWordCurrentPos].innerText = ''
        //get new word
        set++
        //restart
        if (set < setMax) {
            // fetchData()
            start()
        }
        else {
            // endMessageText.innerHTML = `<h2 class="end_win">Game Over! You win with ${points} points!</h2>`
            // endMessageDisplay.style.display = 'flex';
            // endBtn.innerText = 'Play again?';
            // endBtn.addEventListener('click', reset)
            // reset()
        }
    }

    function reset() {
        // endMessageDisplay.style.display = 'none'
        cells[activeWordCurrentPos].classList.remove('active')
        cells[activeWordCurrentPos].innerText = ''
        set = 0
        points = 0
        level = originalevel
        levelDisplay.innerText = level
        speed = originalSpeed
        fetchData()
        pointsDisplay.innerText = 0
    }

    return (
        <GameContainer>
            <div className="message-area">
                <div className="points-area">
                    <div className="points-area-cluster">
                        <div className="points-area-label">Points:</div>
                        <div className="points">0</div>
                    </div>
                    <div className="points-area-cluster">
                        <div className="points-area-label">Level:</div>
                        <div className="level">1</div>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="count-down">3</div>
            </div>
            <div className="end-message">g</div>
            {/* <NavigationBlock setComponentToDisplay={props.setComponentToDisplay} /> */}
        </GameContainer>
    )
}