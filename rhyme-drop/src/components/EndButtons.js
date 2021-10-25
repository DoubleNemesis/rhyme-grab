import { ReactComponent as Home } from '../images/home.svg'
import { Button, ButtonsContainerEnd } from './NavigationBlock'


export default function EndButtons(props) {
    return (
        <ButtonsContainerEnd width="100%" margin="1rem auto" gap="1rem">
            <Button borderColor="skyblue" color="#f30b7b" onClick={() => props.doRestart()}>Play Again</Button>
            <Button borderColor="#f30b7b" color="skyblue" onClick={() => props.setComponentToDisplay('openings')}><Home/></Button>
        </ButtonsContainerEnd>
    )
}