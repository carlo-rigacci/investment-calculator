import './InvestmentDataContainer.css';
import InvestmentData from './investment_data/InvestmentData';

export default function InvestmentDataContainer({ metadata }) {
  return (
    <div className='input-group'>
      <InvestmentData {...metadata[0]} />
      <InvestmentData {...metadata[1]} />
    </div>
  );
}
