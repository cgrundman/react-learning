import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

function App() {
  const initialInvestment = 15000;
  const annualInvestment = 1000;
  const expectedReturn = 5;
  const duration = 10;

  return (
    <main>
      <Header />
      <UserInput />
      <Results 
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </main>
  )
}

export default App
