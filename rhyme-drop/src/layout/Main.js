import styled from 'styled-components'
import { useState } from 'react'
import Openings from '../screens/Opening'
import Instructions from '../screens/Instructions'
import Settings from '../screens/Settings'
import Game from '../screens/Game'

const MainContainer = styled.main`
width: 100%;
/* border: 1px solid white; */
`

export default function Main() {

const [componentToDisplay, setComponentToDisplay] = useState('openings')
const [speedValue, setSpeedValue] = useState(750)
const [sliderValue, setSliderValue] = useState(2)
const [levelValue, setLevelValue] = useState('Average')


    return (
        <MainContainer>
            {componentToDisplay === 'openings' ? <Openings setComponentToDisplay={setComponentToDisplay} /> :
            componentToDisplay=== 'instructions' ?  <Instructions setComponentToDisplay={setComponentToDisplay} /> :
            componentToDisplay=== 'settings' ?  <Settings 
                setComponentToDisplay={setComponentToDisplay} 
                setSpeedValue={setSpeedValue} 
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
                levelValue={levelValue} setLevelValue={setLevelValue}
                /> :
            componentToDisplay === 'game' ? <Game 
            setComponentToDisplay={setComponentToDisplay} 
            speedValue={speedValue}
            sliderValue={sliderValue}
            /> : null
         }
            
           
        </MainContainer>
    )
}