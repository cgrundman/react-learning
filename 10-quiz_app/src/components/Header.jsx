import logoImg from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header>
            <img src={logoImg} alt="quiz-logo" />
            <h1>ReactQuiz</h1>
        </header>
    )
}