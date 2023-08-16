import './InvestmentDataContainer.css';
import InvestmentData from './investment_data/InvestmentData';

export default function InvestmentDataContainer({ nameArray, idArray }) {
  return (
    <div className='input-group'>
      <InvestmentData name={nameArray[0]} id={idArray[0]} />
      <InvestmentData name={nameArray[1]} id={idArray[1]} />
    </div>
  );
}
