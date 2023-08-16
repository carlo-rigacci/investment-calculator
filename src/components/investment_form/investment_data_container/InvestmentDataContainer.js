import './InvestmentDataContainer.css';
import InvestmentData from './investment_data/InvestmentData';

export default function InvestmentDataContainer({ metadata, onInputUpdate }) {
  const onChildChangeHandler = (event) => {
    onInputUpdate(event);
  }
  return (
    <div className='input-group'>
      <InvestmentData {...metadata[0]} onChildChange={onChildChangeHandler}/>
      <InvestmentData {...metadata[1]} onChildChange={onChildChangeHandler}/>
    </div>
  );
}
