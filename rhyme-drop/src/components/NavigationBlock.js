import styled from 'styled-components'
import { ReactComponent as Cog } from '../images/cog.svg'

const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 80%;
`
const Button = styled.button`
padding: .5rem 1rem;
border: 2px solid ${({ borderColor }) => borderColor};
border-radius: 0;
background-color: ${({ bgColor }) => bgColor || 'transparent'};
color: ${({ color }) => color};
font-size: 1rem;
font-weight: 700;
letter-spacing: .8px;
text-transform: uppercase;
font-family: 'Poppins';

svg {
  display: inline-block;
  vertical-align: middle;
}

:hover{
    background-color: ${({ borderColor }) => borderColor || 'transparent'};
}
`


export default function NavigationBlock(props) {
    return (
        <ButtonsContainer>
            <Button borderColor="skyblue" color="#f30b7b" onClick={() => props.setComponentToDisplay('game')}>Play</Button>
            <Button borderColor="#f30b7b" color="skyblue" onClick={() => props.setComponentToDisplay('instructions')}>Help</Button>
            <Button borderColor="#f30b7b" color="skyblue" onClick={() => props.setComponentToDisplay('settings')}><Cog /></Button>
        </ButtonsContainer>

    )
}

