import './InvestmentDataContainer.css';
import InvestmentData from './investment_data/InvestmentData';

export default function InvestmentDataContainer({ metadata, onUpdate }) {

  return (
    <div className='input-group'>
      <InvestmentData {...metadata[0]} onUpdate={onUpdate} />
      <InvestmentData {...metadata[1]} onUpdate={onUpdate} />
    </div>
  );
}
