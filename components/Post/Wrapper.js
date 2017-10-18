import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;

  a {
    padding: 25px;
    text-decoration: none;
    display: block;

    &:hover {
      background: #F1F1F1;

      h3 { color: #387EF5 }
    }
  }

  h3 {
    color: #222;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    margin: 0;
  }

  p {
    padding-top: 10px;
    font-size: 1.2rem;
    line-height: 35px;
    font-weight: 300;
    color: #444;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`

export default Wrapper
