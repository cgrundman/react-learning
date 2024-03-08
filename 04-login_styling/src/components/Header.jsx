import { styled } from 'styled-components'

import logo from '../assets/logo.png';
import classes from './Header.module.css'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
  }
  
  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }
  
    & h1 {
      font-size: 2.25rem;
    }
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={`${classes.paragraph}`}>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
