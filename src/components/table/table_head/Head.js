import './Head.css';
import Row from '../table_row/Row';

const headings = {
  1: 'Year',
  2: 'Total Savings',
  3: 'Interest (Year)',
  4: 'Total Interest',
  5: 'Invested Capital',
};

export default function Head() {
  return (
    <thead>
      <Row dataSet={headings} />
    </thead>
  );
}
