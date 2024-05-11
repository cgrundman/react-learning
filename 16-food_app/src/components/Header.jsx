import Button from './UI/Button.jsx'
import logoImg from '../assets/logo.jpg'

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt='A Resteraunt'/>
                <h1>React Food App</h1>
            </div>
            <nav>
                <Button textOnly>Cart (0)</Button>
            </nav>
        </header>
    )
}