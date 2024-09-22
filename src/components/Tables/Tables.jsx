import { v4 as uuidv4 } from "uuid";
const Tables = ({ data }) => {
  const { hiragana, katakana } = data;

  const regularHiragana = Object.keys(hiragana).map((key) => {
    if (key !== "combo") return String(key);
  });
  console.log(hiragana);

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <th> </th>
            <th>a</th>
            <th>i</th>
            <th>u</th>
            <th>e</th>
            <th>o</th>
          </tr>
        </tbody>
      </table>
      {/* {regularHiragana.map((k) => {
        return <p key={uuidv4()}>{k}</p>;
      })} */}
    </section>
  );
};
export default Tables;
