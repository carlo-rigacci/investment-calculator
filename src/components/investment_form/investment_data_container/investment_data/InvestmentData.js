import './InvestmentData.css';

export default function InvestmentData({ name, id }) {
  return (
    <p>
      <label htmlFor={id}>{name}</label>
      <input type='number' id={id} />
    </p>
  );
}
