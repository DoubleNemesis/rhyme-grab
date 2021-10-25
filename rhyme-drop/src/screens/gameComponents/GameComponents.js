import styled from "styled-components"
import BulletL from '../../images/bulletL.png'
import BulletR from '../../images/bulletR.png'

export const GameContainer = styled.div`
position: relative;

@keyframes rightAnim {
    0% {
      background-color: yellow;
      border: 3px solid skyblue;
    }
    100% {
      background-color: limegreen;
      border: 3px solid yellow;
    }
  }

@keyframes wrongAnim {
    0% {
      background-color: red;
      border: 3px solid orange;
    }
    100%{
        background-color: orange;
        border: 3px solid red;
    }
  }

.cell{
    width: 20%;
    height: 6vh;
    border: 1px solid #cdcdcd;
    background-color: whitesmoke;
    color: #141414;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(min-width:700px){
        width: 100px; 
        height: 45px; 
    }
}

.active{
    background-color: dodgerblue;
    border: 3px solid skyblue;
    color: white;
    border-radius: 2px;
}

.target-word{
    background-color: #f30b7b;
    border: 1px solid #666;
    color: white;
}

.active, .target-word{
    font-size: 90%;
}

.right{
    animation: rightAnim .15s infinite;
    background-color: limegreen;
}

.wrong{
    animation: wrongAnim .25s reverse infinite;
    background-color: limegreen;
}

.grid{
    display: flex;
    flex-wrap: wrap;
    width: 100%; 
    height: 60vh;
    background-color: transparent;
    /* border: 1px solid red; */

    @media(min-width:700px){
        width: 500px; 
        height: 450px; 
        margin: 0 auto;
    }
}

.message-area{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 1rem;
    border-top: 3px solid skyblue;
}

@media(min-width: 700px){
    .message-area{
        border: 3px solid skyblue;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 500px;
        margin: 0 auto;
    } 
}

.points-area{
    color: white;
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: 1.07px;
    width: 100%;
    min-width: 30%;
    display: flex; 
    justify-content: space-between;  
}


.points-area-label{
    padding: 0 1.5rem 0 .5rem;

}

@media(min-width: 700px){
    .points-area-label{
        border-radius: 5px;
    } 
}

.points-area-cluster{
    display: flex;
}

.count-down{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    text-align: center;
    opacity: 1;
}

.end-message{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    z-index: 2;
    background-image: linear-gradient(#666, #212529);
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    border: 2px solid #f30b7b;
    
    @media(min-width: 700px){
            width: 50%;
            /* height: 60%; */
            border: 3px solid #f30b7b;
            padding: 2em 2em 2em 2em;
            border-radius: 5px;
            box-shadow: 3px 3px 3px 3px #333;
    }
    @media(min-width: 1025px){
            width: 25%;
    }
}

h2.intro_headline{
    color: skyblue;
    font-size: .8rem;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 1rem;
    /* margin-bottom: 1rem; */
}
h2.end_headline{
    font-size: 1.8rem;
    color: #f30b7b;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 1rem;
}
h2.end_win{
    font-size: 1.4rem;
    color: #f30b7b;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 1rem;
}
.intro_text{
    color: whitesmoke;
    letter-spacing: 1.2px;
    font-size: .9rem;
    margin: .3rem;
}
.intro_word{
    color: skyblue;
    font-size: 160%;
    padding: 0;
    line-height: 100%;
}

.buttons-container{
    display: none;
}
@media(pointer: coarse){
    .buttons-container{
        position: absolute;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.5;
    }
}
`
export const DirectionBtns = styled.button`
    background-image: url(
        ${({ id }) => id === 'left' ? BulletL : BulletR}
        );
    width: 20vw;
    height: 10vw;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-color: transparent;
    border: 1px solid skyblue;
    padding: 1rem;
        :active{
            filter: brightness(20%);
        }

        @media(min-width:700px){
            width: 15vw;
            height: 7.5vw;
    }
`
const CountDownH2 = styled.h2`
    font-size: 30px;
    font-weight: 800;
    font-family: 'Montserrat';
    color: #f30b7b;
    text-transform: uppercase;
    text-align: center;

    @media(min-width:700px){
        font-size: 50px;
    }
`

export const CountDownMessage = ({children})=>{
    return <CountDownH2>{children}</CountDownH2>
}