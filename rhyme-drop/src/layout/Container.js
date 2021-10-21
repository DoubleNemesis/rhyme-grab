import styled from 'styled-components'

const StyledContainer = styled.div`
  background-image: linear-gradient(#212529, #333);
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`



export default function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}