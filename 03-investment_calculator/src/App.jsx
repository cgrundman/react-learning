import { useState } from "react";

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

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
    <>
      <Header />
      <UserInput />
      <Results />
    </>
  )
}

export default App
