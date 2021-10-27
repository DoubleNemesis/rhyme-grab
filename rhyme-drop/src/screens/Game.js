import { useCallback, useEffect, useState } from 'react'
import { GameContainer, DirectionBtns, CountDownMessage } from './gameComponents/GameComponents'
import EndButtons from '../components/EndButtons'
import TrophySmall from '../images/trophySmall.png'
import Clown from '../images/clown1.png'
import Nerd from '../images/nerd.png'
import Sunglasses from '../images/sunglasses.png'

const noOfSquares = 50
let grid
const gridWidth = 5
let cells = []
let targetWords = []
let setMax = 0
let set = 0
let randSet = []
let wordsToPlay = []
let activeWordCurrentPos = 0
let tileISActive = false
let points = 0
let level = 1
let pointsDisplay
let levelDisplay
let directionBtns
let countDownMessage = `Get Ready`
let speed = 750 // default value from settings.js "nerd"
let originalSpeed = 750 // default value from settings.js
const originalevel = 1
let lives = 3


export default function Game(props) {

    const [tileIsFalling, setTileIsFalling] = useState(false)
    const [gameIsOver, setGameIsOver] = useState(false)
    const [victoryIsYours, setVictoryIsYours] = useState(false)
    const [restart, setRestart] = useState(false)
    const [victoryPoints, setVictoryPoints] = useState(0)
    const [dataHasLoaded, setDataHasLoaded] = useState(false)

    useEffect(() => {
        speed = props.speedValue
        originalSpeed = props.speedValue
    }, [props.speedValue])

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
                <h2><img src={TrophySmall} width="55px" alt="trophy emoji" /></h2>
                <h2 className="end_win">You win with {victoryPoints} points!</h2>
            </>
        )
    }

    const getKeyCode = useCallback((e) => {
        const keyCode = parseInt(document.getElementById(e.target.id).dataset.keyCode)
        controlWord(keyCode)
    }, [])

    const createGrid = useCallback(() => {
        cells.length = 0
        grid = document.getElementsByClassName('grid')[0]
        grid.innerText = null
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



    useEffect(() => {
        document.addEventListener('keydown', assignMoveKeys) //desktop only
        function assignMoveKeys(e) {
            const keyCode = e.keyCode
            controlWord(keyCode)
        }
    }, [])



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
                countDownMessage = ''
                start()
            }, 2000);
        }
    }, [])

    const fetchData = useCallback(() => {
        fetch('rhymedrop/data/words.json') //might have to change on deploy
            .then(response => response.json())
            .then(data => {
                function shuffle(array) { // randomise order of array
                    return array.sort(() => Math.random() - 0.5);
                }
                setMax = data.words.length
                if (!dataHasLoaded) { //only happens once per game
                    for (let i = 0; i < setMax; i++) {
                        randSet.push(i)
                    }
                    randSet = shuffle(randSet)
                }
                wordsToPlay = data.words[randSet[set]].wordsToPlay
                targetWords = shuffle(data.words[randSet[set]].targetWords)
                setDataHasLoaded(true)
                populateGrid()
            })
    }, [populateGrid])  // eslint-disable-line


    const reset = useCallback(() => {
        // if(tileIsFalling){
        cells[activeWordCurrentPos].classList.remove('active')
        cells[activeWordCurrentPos].innerText = ''
        set = 0
        points = 0
        lives = 3
        level = originalevel
        levelDisplay.innerText = level
        speed = originalSpeed
        pointsDisplay.innerText = 0
        setTileIsFalling(false)
        countDownMessage = 'Get Ready'
        // }

    }, [])

    useEffect(() => {
        if (gameIsOver) {
            reset()
        }
    }, [gameIsOver, reset])

    useEffect(() => {
        createGrid()
        fetchData()
        setGameIsOver(false)
    }, [createGrid, fetchData])

    function start() {
        setTileIsFalling(true)
    }

    const calculatePoints = useCallback(() => {
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
            // lose a life
            if(tileIsFalling){
                lives--
                cells[activeWordCurrentPos].classList.add('wrong')
                setTimeout(() => {
                    if (document.getElementsByClassName('wrong')[0]) {
                        document.getElementsByClassName('wrong')[0].classList.remove('wrong')
                    }
                }, 1000)
                if (lives > 0) {
                    console.log(lives);
                    startNextSet()
                }
                else {           // game over
                    if (tileIsFalling) {
                        setTimeout(() => {
                            setGameIsOver(true) //delay in bringing up end screen
                        }, 1500)
                    }
            }

            }



        }

        function startNextSet() {
            if (!gameIsOver) {
                //clearwords
                console.log('next set');
                cells[activeWordCurrentPos].classList.remove('active')
                //make tile show success and then remove it
                cells[activeWordCurrentPos].classList.add('right')
                setTimeout(() => {
                    if (document.getElementsByClassName('right')[0]) {
                        document.getElementsByClassName('right')[0].classList.remove('right')
                    }
                }, 250)
                //get new word
                set++
                //restart
                if (set < setMax) {
                    cells[activeWordCurrentPos].innerText = ''
                    fetchData()
                    start()
                }
                else {
                    //complete victory
                    set = 0
                    setVictoryPoints(points)
                    setVictoryIsYours(true)
                    setGameIsOver(true)
                }
            }
        }

    }, [tileIsFalling, fetchData, gameIsOver])

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
        tileISActive=true
        console.log('control');
        if (activeWordCurrentPos > noOfSquares - 11) {
            tileISActive = false
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
            default: return
        }
    }

    function doRestart() {
        setRestart(true)
        setGameIsOver(false)
        createGrid()
        setDataHasLoaded(false)
        fetchData()
    }

    useEffect(() => {
        setRestart(false)
    }, [restart])

    return (
        <GameContainer>
            <div className="message-area">
                <div className="points-area">
                    <div className="points-area-cluster">
                        <div className="points-area-label">Points:</div>
                        <div className="points">0</div>
                    </div>
                    <div className="points-area-cluster">
                        <div className="points-area-emoji">
                            {props.sliderValue === 1 ? <img src={Clown} alt="clown emoji" /> :
                                props.sliderValue === 2 ? <img src={Nerd} alt="nerd emoji" /> :
                                    props.sliderValue === 3 ? <img src={Sunglasses} alt="sunglasses emoji" /> : null
                            }
                        </div>

                    </div>
                    <div className="points-area-cluster">
                        <div className="points-area-label">Level:</div>
                        <div className="level">1</div>
                    </div>
                </div>
            </div>
            <div className="grid"></div>
            <div className="count-down"><CountDownMessage>{countDownMessage}</CountDownMessage></div>
            {gameIsOver ?
                <div className="end-message"> {victoryIsYours ? <VictoryMessage /> : <GameOverMessage />}
                    <EndButtons setComponentToDisplay={props.setComponentToDisplay} doRestart={doRestart} />
                </div> : null}

            <div className="buttons-container">
                <DirectionBtns id="left" className="direction-button" data-key-code="37"></DirectionBtns>
                <DirectionBtns id="right" className="direction-button" data-key-code="39"></DirectionBtns>
            </div>
        </GameContainer>
    )
}