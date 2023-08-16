import './InvestmentForm.css';
import InvestmentDataContainer from './investment_data_container/InvestmentDataContainer';
import { useState } from 'react';

class Metadata {
  constructor(name, id, tag) {
    this.name = name;
    this.id = id;
    this.tag = tag;
  }
}

const initialState = {
  currentSavings: 0,
  yearlyContribution: 0,
  expectedReturn: 0,
  duration: 0,
};

export default function InvestmentForm() {
  const [formState, setFormState] = useState(initialState);

  const onInputUpdateHandler = ({ target: { name, value } }) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formState);
  console.log('test');

  return (
    <form className='form'>
      <InvestmentDataContainer
        onInputUpdate={onInputUpdateHandler}
        metadata={[
          new Metadata(
            'Current Savings ($)',
            'current-savings',
            'currentSavings'
          ),
          new Metadata(
            'Yearly Savings ($)',
            'yearly-contribution',
            'yearlyContribution'
          ),
        ]}
      />
      <InvestmentDataContainer
        onInputUpdate={onInputUpdateHandler}
        metadata={[
          new Metadata(
            'Expected Interest (%, per year)',
            'expected-return',
            'expectedReturn'
          ),
          new Metadata('Investment Duration (years)', 'duration', 'duration'),
        ]}
      />
    </form>
  );
}
