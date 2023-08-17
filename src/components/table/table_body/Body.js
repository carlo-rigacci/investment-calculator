import './Body.css';
import Row from '../table_row/Row';

export default function Body({ yearlyData }) {
  return (
    <tbody>
      {yearlyData.map((data, index) => (
        <Row key={index} dataForTheYear={data} />
      ))}
    </tbody>
  );
}
