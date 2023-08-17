export default function Row({ dataForTheYear }) {
  return (
    <tr>
      {Object.values(dataForTheYear).map((data, index) => (
        <td key={index}>{data}</td>
      ))}
    </tr>
  );
}
