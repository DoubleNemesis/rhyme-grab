import styled from 'styled-components'
import Logo from '../images/logo.png'

const HeaderContainer = styled.header`
text-align: center;
padding: 1em;
/* border: 1px solid red; */
`

const StyledLogo = styled.img`
    max-width: 250px;
@media(min-width: 700px){
        max-width: 300px;
}
`

export default function Header() {
    return (
        <HeaderContainer>
            <a href="/"><StyledLogo src={Logo} /></a>
        </HeaderContainer>
    )
}