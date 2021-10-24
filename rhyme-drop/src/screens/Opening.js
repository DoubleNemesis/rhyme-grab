import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Screen from '../images/screen1.gif'
import NavigationBlock from '../components/NavigationBlock'
import MainContainer from '../components/MainContainer'
import H1 from '../components/H1'
import { ReactComponent as Cog } from '../images/cog.svg'
import { ReactComponent as Information } from '../images/information.svg'

const Container = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`

const StyledImage = styled.img`
margin: 0 auto;
width: 90%;
padding: 1rem;
`

const IconContainer = styled.div`
svg {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
}
svg:nth-child(2){
    margin-left: 1rem;
}
`

const SettingsMessage = () => <IconContainer><Information/> for instructions <Cog/> to set level</IconContainer>

export default function Openings(props) {

    const [message, setMessage] = useState('Move the word left or right as it drops...')
    // const [message, setMessage] = useState(SettingsMessage)
    
    
    const messageArray = [
        `Move the word left or right as it drops...`,
        `so it lands on the word it rhymes with.`, 
        SettingsMessage
    ]


    useEffect(() => {
        let index = 1
        const messageTimer = setInterval(() => {
            setMessage(messageArray[index])
            if (index === messageArray.length-1){
                index = 0
            }
            else{
                index++
            }
        }, 3000)
        return () => clearInterval(messageTimer)
    }, [])


    return (
        <MainContainer>
            <H1>
                {message}
            </H1>
            <Container><StyledImage src={Screen} alt="game board" /></Container>
            <NavigationBlock setComponentToDisplay={props.setComponentToDisplay} />
        </MainContainer>
    )
}