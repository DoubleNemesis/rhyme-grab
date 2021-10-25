import styled from 'styled-components'
import { ReactComponent as Cog } from '../images/cog.svg'
import { ReactComponent as Information } from '../images/information.svg'

export const ButtonsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: ${({width})=> width || ' 80%'};
gap: ${({gap})=> gap || null};
margin: ${({margin})=> margin || '0'};

@media(min-width: 700px){
width: 80%;
padding: 2rem;
}

@media(min-width: 1025px){
width: 25%;
padding: 0 2rem 0 2rem;
}
`
export const Button = styled.button`
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
            <Button borderColor="#f30b7b" color="skyblue" onClick={() => props.setComponentToDisplay('instructions')}><Information/></Button>
            <Button borderColor="#f30b7b" color="skyblue" onClick={() => props.setComponentToDisplay('settings')}><Cog /></Button>
        </ButtonsContainer>

    )
}

export const ButtonsContainerEnd = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: ${({width})=> width || ' 80%'};
gap: ${({gap})=> gap || null};
margin: ${({margin})=> margin || '0'};

@media(min-width: 700px){
width: 80%;
padding: 2rem;
}

@media(min-width: 1025px){
padding: 0 2rem 0 2rem;
}
`