export default function Row({ dataForTheYear }) {
  return (
    <tr>
      {dataForTheYear.map((data, index) => (
        <td key={index}>{data}</td>
      ))}
    </tr>
  );
}
