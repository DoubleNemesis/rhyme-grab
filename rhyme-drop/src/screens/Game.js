import { useCallback, useEffect, useState } from 'react'
import { GameContainer, DirectionBtns } from './gameComponents/GameComponents'
import EndButtons from '../components/EndButtons'

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
let speed = 2000
let tileISActive = false
let points = 0
let level = 1
let pointsDisplay
let levelDisplay
let directionBtns
const originalSpeed = 500
const originalevel = 1


export default function Game(props) {

    const [tileIsFalling, setTileIsFalling] = useState(false)
    const [gameIsOver, setGameIsOver] = useState(false)
    const [victoryIsYours, setVictoryIsYours] = useState(false)

    const GameOverMessage = () => {
        return (
            <>
                <h2 className="end_headline">Game Over!</h2>
                <p className="intro_text">You should have matched </p>
                <div className="intro_word"> {wordsToPlay[0]}</div>
                <div className="intro_text">with </div>
                <div className="intro_word">{wordsToPlay[1]}</div>
                <p className="intro_text">You got {points} points</p>
            </>
        )
    }

    const VictoryMessage = () => {
        return (
            <>
            <h2 className="end_win">Game Over!</h2> 
            <h2 className="end_win">You win with {points} points!</h2>
            </>
        )
    }

    const getKeyCode = useCallback((e) => {
        const keyCode = parseInt(document.getElementById(e.target.id).dataset.keyCode)
        controlWord(keyCode)
    }, [])


    const createGrid = useCallback(() => {
        grid = document.getElementsByClassName('grid')[0]
        countDown = document.getElementsByClassName('count-down')[0]
        pointsDisplay = document.getElementsByClassName('points')[0]
        levelDisplay = document.getElementsByClassName('level')[0]
        directionBtns = document.querySelectorAll('.direction-button')
        directionBtns.forEach((elem) => {
            elem.addEventListener('click', getKeyCode)
        })

        for (let i = 0; i < noOfSquares; i++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.innerText = ''
            grid.appendChild(cell)
            cells.push(cell)
        }
    }, [getKeyCode])

    //populate the grid
    const populateGrid = useCallback(() => {
        let j = 0
        for (let i = noOfSquares - gridWidth; i < noOfSquares; i++) {
            cells[i].innerText = targetWords[j]
            cells[i].classList.add('target-word')
            j++
        }
        const ranNum = Math.floor(Math.random() * 5)
        cells[ranNum].innerText = wordsToPlay[0]
        cells[ranNum].classList.add('active')
        activeWordCurrentPos = ranNum
        go()
        //start the countdown
        function go() {
            setTimeout(() => {
                countDown.innerText = ''
                start()
            }, 2000);

        }
    }, [])

    const fetchData = useCallback(() => {
        fetch('./data/words.json')
            .then(response => response.json())
            .then(data => {
                wordsToPlay = data.words[set].wordsToPlay
                function shuffle(array) { // put target words in random order
                    return array.sort(() => Math.random() - 0.5);
                }
                targetWords = shuffle(data.words[set].targetWords)
                setMax = data.words.length
                populateGrid()
            })
    }, [populateGrid])






    useEffect(() => {
        createGrid()
        fetchData()
    }, [createGrid, fetchData])

    function start() {
        setTileIsFalling(true)
    }

    const calculatePoints =useCallback(()=>{
        if (wordsToPlay[1] === cells[activeWordCurrentPos + 5].innerText) {
            points++
            if (points % 4 === 0) {
                level++
                speed = speed * 0.98
            }
            pointsDisplay.innerText = points
            levelDisplay.innerText = level
            startNextSet()
        }
        else {
            // game over
            if (tileIsFalling) {
                setGameIsOver(true)
            }
            cells[activeWordCurrentPos].classList.add('wrong')
            setTimeout(() => {
                if (document.getElementsByClassName('wrong')[0]) {
                    document.getElementsByClassName('wrong')[0].classList.remove('wrong')
                }

            }, 1000)
        }

        function startNextSet() {
            //clearwords
            cells[activeWordCurrentPos].classList.remove('active')
            //make tile show success and then remove it
            cells[activeWordCurrentPos].classList.add('right')
            setTimeout(() => {
                if (document.getElementsByClassName('right')[0]) {
                    document.getElementsByClassName('right')[0].classList.remove('right')
                }
            }, 250)
            cells[activeWordCurrentPos].innerText = ''
            //get new word
            set++
            //restart
            if (set < setMax) {
                fetchData()
                start()
            }
            else {
                //complete victory
                setVictoryIsYours(true)
                setGameIsOver(true)
            }
        }

    },[tileIsFalling, fetchData])

    useEffect(() => {
        tileISActive = true
        const activeWordTimer = setInterval(() => {
            if (activeWordCurrentPos < noOfSquares - gridWidth * 2 && tileIsFalling) {
                cells[activeWordCurrentPos].innerText = ""
                cells[activeWordCurrentPos].classList.remove('active')
                cells[activeWordCurrentPos + gridWidth].innerText = wordsToPlay[0]
                cells[activeWordCurrentPos + gridWidth].classList.add('active')
                activeWordCurrentPos += gridWidth
            }
            else {
                setTileIsFalling(false)
                clearInterval(activeWordTimer)
                tileISActive = false
                calculatePoints()
            }
        }, speed)
        return () => { clearInterval(activeWordTimer) }
    }, [tileIsFalling, calculatePoints])



    function controlWord(keyCode) {
        if (activeWordCurrentPos > noOfSquares - 11) {
            setTimeout(() => {
                tileISActive = false
            }, 300)
        }

        switch (keyCode) {
            case 37:
                if (activeWordCurrentPos - 1 <= 44 && activeWordCurrentPos % 5 !== 0 && tileISActive) {
                    cells[activeWordCurrentPos].classList.remove('active')
                    cells[activeWordCurrentPos].innerText = ''
                    cells[activeWordCurrentPos - 1].innerText = wordsToPlay[0]
                    cells[activeWordCurrentPos - 1].classList.add('active')
                    activeWordCurrentPos -= 1
                }
                break
            case 39:
                if (activeWordCurrentPos + 1 <= 44 && (activeWordCurrentPos + 1) % 5 !== 0 && tileISActive) {
                    cells[activeWordCurrentPos].classList.remove('active')
                    cells[activeWordCurrentPos].innerText = ''
                    cells[activeWordCurrentPos + 1].innerText = wordsToPlay[0]
                    cells[activeWordCurrentPos + 1].classList.add('active')
                    activeWordCurrentPos += 1
                }
                break
        }
    }





    function reset() {
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
                <div className="count-down">Ready!</div>
            </div>
            {gameIsOver ?
                <div className="end-message"> {victoryIsYours ? <VictoryMessage /> : <GameOverMessage />}
                    <EndButtons setComponentToDisplay={props.setComponentToDisplay} />
                </div> : null}

            <div className="buttons-container">
                <DirectionBtns id="left" className="direction-button" data-key-code="37"></DirectionBtns>
                <DirectionBtns id="right" className="direction-button" data-key-code="39"></DirectionBtns>
            </div>
            {/* <NavigationBlock setComponentToDisplay={props.setComponentToDisplay} /> */}
        </GameContainer>
    )
}