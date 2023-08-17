export default function Row({ dataSet }) {
  return (
    <tr>
      {Object.values(dataSet).map((data, index) => (
        <td key={index}>{data}</td>
      ))}
    </tr>
  );
}
