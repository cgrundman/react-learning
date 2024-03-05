import { useState } from "react"

export default function UserInput({ initialData, onInput }) {
    const [investmentData, setInvestmentData] = useState({
        initialInvestment: 15000,
        annualInvestment: 800,
        expectedReturn: 5,
        duration: 10
    });

    function handleChange (inputIdentifier, newValue) {
        setInvestmentData(previousData => {
            return {
                ...previousData,
                [inputIdentifier]: newValue
            };
        });
    }

    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment ($) {investmentData.initialInvestment}</label>
                    <input 
                        type="number" 
                        required 
                        value={investmentData.initialInvestment}
                        onChange={(event) => 
                            handleChange('initialInvestment', event.target.value)} 
                    />
                </p>
                <p>
                    <label>Annual Investment ($) {investmentData.annualInvestment}</label>
                    <input 
                        type="number" 
                        required 
                        value={investmentData.annualInvestment}
                        onChange={(event) => 
                            handleChange('annualInvestment', event.target.value)} 
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return (%) {investmentData.expectedReturn}</label>
                    <input 
                        type="number" 
                        required 
                        value={investmentData.expectedReturn}
                        onChange={(event) => 
                            handleChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration (years) {investmentData.duration}</label>
                    <input 
                        type="number" 
                        required 
                        value={investmentData.duration}
                        onChange={(event) => 
                            handleChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}