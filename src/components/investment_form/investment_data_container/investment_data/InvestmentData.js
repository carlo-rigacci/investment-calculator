import './InvestmentData.css';
import { useState } from 'react';

export default function InvestmentData({ name, id }) {
  const [inputState, setInputState] = useState('');
  const onChangeHandler = ({ target: { value } }) => {
    setInputState(value);
  };

  return (
    <p>
      <label htmlFor={id}>{name}</label>
      <input onChange={onChangeHandler} type='number' id={id} />
    </p>
  );
}
