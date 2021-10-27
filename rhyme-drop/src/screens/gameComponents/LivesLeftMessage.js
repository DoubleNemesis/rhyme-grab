import styled, { keyframes } from "styled-components"

const FadeOut = keyframes`

    0% {
      opacity: 1;
    }
    100% {
        opacity: 0;
    }
`


const LivesLeftH2 = styled.h2`
    font-size: 20px;
    font-weight: 400;
    font-family: 'Montserrat';
    color: #f30b7b;
    /* color: limegreen; */
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    padding: 0;
    opacity: ${({opacity})=>opacity || '1'};
    animation: ${FadeOut} 1s forwards;

    @media(min-width:700px){
        font-size: 25px;
    }
`

export const LivesLeftMessage = ({ children }) => {
    return <LivesLeftH2 >{children}</LivesLeftH2>
}