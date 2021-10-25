import styled from 'styled-components'
import Logo from '../images/logo.png'

const HeaderContainer = styled.header`
text-align: center;
padding: 2em 1em 0 1em;
/* border: 1px solid blue; */

@media(min-width: 700px){
padding-top: 4rem;
}
`

const StyledLogo = styled.img`
    max-width: 250px;
    @media(min-width: 700px){
            max-width: 300px;
    }
`

// logo click = clear all, return to "openings"

export default function Header() {
    return (
        <HeaderContainer>
            <a href="/rhymedrop"><StyledLogo src={Logo} /></a>
        </HeaderContainer>
    )
}