import './InvestmentData.css';
import { useState } from 'react';

export default function InvestmentData({ name, id, tag, onChildChange }) {
  const [inputState, setInputState] = useState('');
  const onChangeHandler = (event) => {
    setInputState(event.target.value);
    onChildChange(event);
  };

  return (
    <p>
      <label htmlFor={id}>{name}</label>
      <input
        value={inputState}
        onChange={onChangeHandler}
        type='number'
        id={id}
        name={tag}
      />
    </p>
  );
}
