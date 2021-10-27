import styled from "styled-components"
import BulletL from '../../images/bulletL.png'
import BulletR from '../../images/bulletR.png'


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
