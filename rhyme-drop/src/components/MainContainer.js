import styled from "styled-components";


const Container = styled.div`
color: whitesmoke;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const MainContainer = ({children})=>{
    return <Container>{children}</Container>
}

export default MainContainer