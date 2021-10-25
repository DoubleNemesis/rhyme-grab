import styled from "styled-components";

const Container = styled.div`
color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const MainContainer = ({ children }) => {
    return <Container>{children}</Container>
}

export default MainContainer

const DesktopContainer = styled.div`
    color: whitesmoke;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 3px solid #f30b7b;
    border-radius: 5px;
    background-image: linear-gradient(#666, #212529);
    width: 80%;
    height: 60%;
    padding: 0;
    box-shadow: 3px 3px 3px 3px #333;
    margin: 0 auto;
`

export function MainDesktopContainer({ children }) {
    return <DesktopContainer>{children}</DesktopContainer>
}