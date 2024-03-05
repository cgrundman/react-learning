import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ investmentData }) {
    const results = calculateInvestmentResults( investmentData )

    // Display Calculated Investment table
    console.log(results)

    return (
        <section id='result'>
            <div className="input-group">
                <div>
                    <thead>Year</thead>
                    <tbody>{results[0].year}</tbody>
                    <tbody>{results[1].year}</tbody>
                    <tbody>{results[2].year}</tbody>
                    <tbody>{results[3].year}</tbody>
                    <tbody>{results[4].year}</tbody>
                </div>
                <div>
                    <thead>Interest</thead>
                    <tbody>{formatter.format(results[0].interest)}</tbody>
                    <tbody>{formatter.format(results[1].interest)}</tbody>
                    <tbody>{formatter.format(results[2].interest)}</tbody>
                    <tbody>{formatter.format(results[3].interest)}</tbody>
                    <tbody>{formatter.format(results[4].interest)}</tbody>
                </div>
                <div>
                    <thead>Investment Sum</thead>
                    <tbody>{formatter.format(results[0].valueEndOfYear)}</tbody>
                    <tbody>{formatter.format(results[1].valueEndOfYear)}</tbody>
                    <tbody>{formatter.format(results[2].valueEndOfYear)}</tbody>
                    <tbody>{formatter.format(results[3].valueEndOfYear)}</tbody>
                    <tbody>{formatter.format(results[4].valueEndOfYear)}</tbody>
                </div>
                <div>
                    <thead>Annual Investment</thead>
                    <tbody>{formatter.format(results[0].annualInvestment)}</tbody>
                    <tbody>{formatter.format(results[1].annualInvestment)}</tbody>
                    <tbody>{formatter.format(results[2].annualInvestment)}</tbody>
                    <tbody>{formatter.format(results[3].annualInvestment)}</tbody>
                    <tbody>{formatter.format(results[4].annualInvestment)}</tbody>
                </div>
            </div>
        </section>
    )
}