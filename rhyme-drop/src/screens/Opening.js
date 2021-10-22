import styled from 'styled-components'
import Screen from '../images/screen2.png'
import NavigationBlock from '../components/NavigationBlock'
import MainContainer from '../components/MainContainer'
import H1 from '../components/H1'


const StyledImage = styled.img`
width: 80%;
margin: 1rem;
`

export default function Openings(props) {

    return (
        <MainContainer>
           <H1>A word rhyming game of speed and skill</H1>
           <StyledImage src={Screen} alt="game board"/>
           <NavigationBlock setComponentToDisplay={props.setComponentToDisplay}/>
        </MainContainer>
    )
}