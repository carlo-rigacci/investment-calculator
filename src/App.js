import Header from './components/header/Header';
import InvestmentForm from './components/investment_form/InvestmentForm';
import { useState } from 'react';
import Table from './components/table/Table';

function App() {
  const [annualDataState, setAnnualData] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlyContribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setAnnualData(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvestmentForm calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {annualDataState.length > 0 ? (
        <Table yearlyData={annualDataState} />
      ) : (
        <p style={{display: 'flex', justifyContent: 'center'}}>NO DATA</p>
      )}
    </div>
  );
}

export default App;
