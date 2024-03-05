export default function UserInput({ data, onchange }) {
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment ($) {data.initialInvestment}</label>
                    <input 
                        type="number" 
                        required 
                        value={data.initialInvestment}
                        onChange={(event) => 
                            onchange('initialInvestment', event.target.value)} 
                    />
                </p>
                <p>
                    <label>Annual Investment ($) {data.annualInvestment}</label>
                    <input 
                        type="number" 
                        required 
                        value={data.annualInvestment}
                        onChange={(event) => 
                            onchange('annualInvestment', event.target.value)} 
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return (%) {data.expectedReturn}</label>
                    <input 
                        type="number" 
                        required 
                        value={data.expectedReturn}
                        onChange={(event) => 
                            onchange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration (years) {data.duration}</label>
                    <input 
                        type="number" 
                        required 
                        value={data.duration}
                        onChange={(event) => 
                            onchange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}