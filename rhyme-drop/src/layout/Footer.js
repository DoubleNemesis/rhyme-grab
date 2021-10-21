import styled from 'styled-components'

const FooterContainer = styled.footer`
text-align: center;
padding: 1em;

a{
    font-size: .6rem;
    color: whitesmoke;
    text-decoration: none;
}
`

export default function Footer() {
    return (
        <FooterContainer>
            <a href="/">RhymeDrop is &copy; Thomas P Chant 2021 all rights reserved.</a>
        </FooterContainer>
    )
}