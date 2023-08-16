import './InvestmentForm.css';
import InvestmentDataContainer from './investment_data_container/InvestmentDataContainer';

class Metadata {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

export default function InvestmentForm() {
  return (
    <form className='form'>
      <InvestmentDataContainer
        metadata={[
          new Metadata('Current Savings ($)', 'Yearly Savings ($)'),
          new Metadata('current-savings', 'yearly-contribution'),
        ]}
      />
      <InvestmentDataContainer
        metadata={[
          new Metadata('Expected Interest (%, per year)', 'expected-return'),
          new Metadata('Investment Duration (years)', 'duration'),
        ]}
      />
    </form>
  );
}
