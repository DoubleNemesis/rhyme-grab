import styled from "styled-components"

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

export const CountDownMessage = ({ children }) => {
    return <CountDownH2>{children}</CountDownH2>
}