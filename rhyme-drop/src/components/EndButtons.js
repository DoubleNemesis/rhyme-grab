import { ReactComponent as Home } from '../images/home.svg'
import { Button, ButtonsContainer } from './NavigationBlock'


export default function EndButtons(props) {
    return (
        <ButtonsContainer width="100%" margin="1rem 0 0 0">
            <Button borderColor="skyblue" color="#f30b7b" onClick={() => props.doRestart()}>Play Again</Button>
            <Button borderColor="#f30b7b" color="skyblue" onClick={() => props.setComponentToDisplay('openings')}><Home/></Button>
        </ButtonsContainer>
    )
}