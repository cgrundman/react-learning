import { useState } from "react";
import QUESTIONS from '../questions.js'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const actvieQuestionIndex = userAnswers.length;

    function handleSelectAnswwer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            console.log(actvieQuestionIndex)
            return (
                [...prevUserAnswers, selectedAnswer]
                
            )
        });
    }
    
    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[actvieQuestionIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[actvieQuestionIndex].answers.map(answer => (
                    <li key={answer} className="answer">
                        <button onCLick={() => handleSelectAnswwer(answer)}>{answer}</button>
                    </li>))}
                </ul>
            </div>
        </div>
    )
}
