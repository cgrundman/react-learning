import { useState } from "react";

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 15000,
    annualInvestment: 800,
    expectedReturn: 5,
    duration: 10
  });

  const inputIsValid = investmentData.duration >= 1;

  function handleChange (inputIdentifier, newValue) {
    setInvestmentData(previousData => {
        return {
            ...previousData,
            [inputIdentifier]: +newValue
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput 
        data={investmentData} 
        onchange={handleChange}
      />
      {!inputIsValid && <p>Please enter a valid duration.</p>}
      {inputIsValid && <Results 
        investmentData={investmentData}
      />}
    </>
  )
}

export default App
