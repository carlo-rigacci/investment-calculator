import './InvestmentForm.css';
import InvestmentDataContainer from './investment_data_container/InvestmentDataContainer';

export default function InvestmentForm() {
  return (
    <form className='form'>
      <InvestmentDataContainer
        nameArray={['Current Savings ($)', 'Yearly Savings ($)']}
        idArray={['current-savings', 'yearly-contribution']}
      />
      <InvestmentDataContainer
        nameArray={[
          'Expected Interest (%, per year)',
          'Investment Duration (years)',
        ]}
        idArray={['expected-return', 'duration']}
      />
    </form>
  );
}
