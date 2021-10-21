import styled from 'styled-components'
import Screen from '../images/screen2.png'

const OpeningsContainer = styled.div`
color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Heading = styled.h1`
margin: 0;
padding: .4rem;
font-size: 1rem;
text-align: center;
font-weight: 400;
`
const StyledImage = styled.img`
width: 80%;
margin: 1rem;
`
const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 80%;
`
const Button = styled.button`
padding: .5rem 1rem;
border: 2px solid ${({bColor})=>bColor};
border-radius: 0;
background-color: ${({bgColor})=>bgColor};
background-color: transparent;
color: ${({color})=>color};
font-size: 1rem;
font-weight: 700;
letter-spacing: .8px;
text-transform: uppercase;
font-family: 'Poppins';
`

///general info and pic

export default function Openings() {
    return (
        <OpeningsContainer>
           <Heading>A word rhyming game of speed and skill!</Heading>
           <StyledImage src={Screen} alt="game board"/>
           <ButtonsContainer>
               <Button bColor="skyblue" color="#f30b7b">Play</Button>
               <Button bColor="#f30b7b" color="skyblue">Instructions</Button>
           </ButtonsContainer>
        </OpeningsContainer>
    )
}