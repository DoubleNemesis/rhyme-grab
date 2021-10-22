import styled from 'styled-components'
import NavigationBlock from '../components/NavigationBlock'
import MainContainer from '../components/MainContainer'
import H1 from '../components/H1'
import Bullet from '../images/bullet.png'

const Ul = styled.ul`
    text-align: left;
    font-size: .9rem;
    list-style-image: url(${Bullet});
    font-weight: 300;
    margin-right: 1rem;

li{
    margin-bottom: 10px;
}

@media(min-width:1025px){
    li.mobile-only{
    display: none;
}
}
@media(max-width:1024px){
    li.desktop-only{
    display: none;
}
}







`



//<img src="images/lArr.png" alt="controlling arrow" class="arrow-img"> <img src="images/rArr.png" alt="controlling arrow" class="arrow-img">

export default function Instructions(props) {
    return (
        <MainContainer>
            <H1>How to Play</H1>
                <Ul>
                    <li className="desktop-only">Use  to guide the falling word.</li>
                        <li className="mobile-only">Tap the left/right half of the screen to control the falling word.</li>
                        <li>There is only one correct answer in each word set.</li>
                        <li>You score one point for every word you get right.</li>
                        <li>It gets harder and faster as the game goes on.</li>
                        <li>When you make a mistake, it's <span class="strong">game over</span>.</li>
                </Ul>
                <NavigationBlock setComponentToDisplay={props.setComponentToDisplay}/>
        </MainContainer>
                )
}