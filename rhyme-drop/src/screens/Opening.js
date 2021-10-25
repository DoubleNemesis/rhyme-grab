import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Screen from '../images/screen1.gif'
import Screen1 from '../images/screen.png'
import NavigationBlock from '../components/NavigationBlock'
import MainContainer, {MainDesktopContainer} from '../components/MainContainer'
import H1 from '../components/H1'
import { ReactComponent as Cog } from '../images/cog.svg'
import { ReactComponent as Information } from '../images/information.svg'

const Container = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`
const Column = styled.div`
display: flex;
flex-direction: column;
width: ${({width})=>width};
align-items: center;
justify-content: space-around;
min-height: 50vh;
padding: 2rem;

img{
    width: 75%;
}

p{
    text-align: left;
    margin-left: 1rem;
}
`

const StyledImage = styled.img`
margin: 0 auto;
width: 90%;
padding: 1rem;

@media(min-width: 700px){
width: 80%;
padding: 2rem;
}
@media(min-width: 1025px){
width: 45%;
padding: .5rem;
}
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
const MobileContainer = styled.div`
@media(max-width:1024px){
    display: inline;
}
@media(min-width:1025px){
    display: none;
}
`

const DesktopContainer = styled.div`
@media(max-width:1024px){
    display: none;
}
@media(min-width:1025px){
    display: inline;
}
`

const SettingsMessage = () => <IconContainer><Information /> for instructions <Cog /> to set level</IconContainer>

export default function Openings(props) {

    const [message, setMessage] = useState('Make the word land on a rhyming word.')

    useEffect(() => {
        const messageArray = [
            `Make the word land on a rhyming word.`,
            SettingsMessage
        ]
        let index = 1
        const messageTimer = setInterval(() => {
            setMessage(messageArray[index])
            if (index === messageArray.length - 1) {
                index = 0
            }
            else {
                index++
            }
        }, 3000)
        return () => clearInterval(messageTimer)
    }, [])


    return (
        <>
            <MobileContainer>
                <MainContainer>
                    <H1>{message}</H1>
                    <Container><StyledImage src={Screen} alt="game board" /></Container>
                    <NavigationBlock setComponentToDisplay={props.setComponentToDisplay} />
                </MainContainer>
            </MobileContainer>

            <DesktopContainer>
                <MainDesktopContainer>
                    <Column width="90%">
                    <div>
                    <H1 fontSize="1.1rem">Playing Rhyme Drop</H1>
                    <p>
                        All you have to do is make each word that falls land on a word it rhymes with. 
                        As the game progresses, the words get harder and fall faster!
                    </p>
                    <p>
                        For more detailed instructions click the info button below.
                    </p>
                    <p>
                        To set speed level click the cog icon.
                    </p>
                    </div>
                    <NavigationBlock setComponentToDisplay={props.setComponentToDisplay} width="60%" gap="2rem" margin="1rem" />
                    </Column>
                    <Column>
                    <StyledImage src={Screen1} alt="game board" />
                    </Column>
                </MainDesktopContainer>
            </DesktopContainer>
        </>
    )
}