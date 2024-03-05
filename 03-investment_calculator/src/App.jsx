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

  return (
    <>
      <Header />
      <UserInput 
        investmentData={investmentData} 
        setInvestmentData={setInvestmentData}
      />
      <Results />
    </>
  )
}

export default App
