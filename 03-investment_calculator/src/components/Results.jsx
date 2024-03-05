export default function Results({initialInvestment, 
                                 annualInvestment, 
                                 expectedReturn, 
                                 duration}) {
    const y = 12;

    return (
        <div id='result'>
            <div>
                <thead>Initial Investment</thead>
                <tbody>{initialInvestment}</tbody>
            </div>
            <div>
                <thead>Initial Investment</thead>
                <tbody>{annualInvestment}</tbody>
            </div>
            <div>
                <thead>Initial Investment</thead>
                <tbody>{expectedReturn}</tbody>
            </div>
            <div>
                <thead>Initial Investment</thead>
                <tbody>{duration}</tbody>
            </div>
        </div>
    )
}