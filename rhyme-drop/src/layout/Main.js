import styled from 'styled-components'
import { useState } from 'react'
import Openings from '../screens/Opening'
import Instructions from '../screens/Instructions'
import Game from '../screens/Game'

const MainContainer = styled.main`
width: 100%;
/* border: 1px solid white; */
`

export default function Main() {

const [componentToDisplay, setComponentToDisplay] = useState( <Openings />)


    return (
        <MainContainer>
           {componentToDisplay}
        </MainContainer>
    )
}