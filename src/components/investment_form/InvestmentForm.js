import './InvestmentForm.css';
import InvestmentDataContainer from './investment_data_container/InvestmentDataContainer';

export default function InvestmentForm() {
  return (
    <form className='form'>
      <InvestmentDataContainer />
      <InvestmentDataContainer />
    </form>
  );
}
