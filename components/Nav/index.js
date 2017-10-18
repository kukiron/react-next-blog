import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.nav`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  background: #46a049;

  a {
    padding: 0 35px;
    line-height: 2rem;
    color: #FFF;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #71c174;
    }
  }
`

const Nav = () => (
  <Wrapper>
    <Link href='/'><a>Home</a></Link>
    <Link href='/about' prefetch><a>About</a></Link>
    <Link href='/contact' prefetch><a>Contact</a></Link>
  </Wrapper>
)

export default Nav
