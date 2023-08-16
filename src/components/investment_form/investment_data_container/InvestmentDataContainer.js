import './InvestmentDataContainer.css';
import InvestmentData from './investment_data/InvestmentData';

export default function InvestmentDataContainer() {
  return (
    <div className='input-group'>
      <InvestmentData />
      <InvestmentData />
    </div>
  );
}
