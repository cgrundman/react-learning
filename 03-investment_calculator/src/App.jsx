import { useState } from "react";

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

const INVESTMENTDATA = [
  15000
]

function App() {
  // const [ investmentData, setInvestmentData ] = useState(INVESTMENTDATA);

  // function handleInvestmentData() {
  //   setInvestmentData(investmentData => {
  //     return{
  //       ...investmentData
  //     };
  //   });
  // } 

  return (
    <main>
      <Header />
      
      <UserInput />
      <Results 
        // initialInvestment={initialInvestment}
        // annualInvestment={annualInvestment}
        // expectedReturn={expectedReturn}
        // duration={duration}
      />
    </main>
  )
}

export default App
