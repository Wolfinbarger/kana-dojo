import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const Tables = ({ hiragana, katakana }) => {
  const regularHiragana = hiragana.regular;

  // for (let key in regularHiragana) {
  //   console.log(key, regularHiragana[key]);
  // }
  const rowData = (e) => {
    let tmpRowData = [
      <td key={uuidv4()}>
        <input type="checkbox" names={e} id={e} />
      </td>,
    ];
    for (let i = 0; i < e.length; i++) {
      console.log(e.length);
      tmpRowData.push(<td>{e[i]}</td>);
    }
    return tmpRowData;
  };

  const rows = [];
  for (let key in regularHiragana) {
    rows.push(<tr>{rowData(regularHiragana[key])}</tr>);
  }

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              <input type="checkbox" names="a" id="a" />
            </th>
            <th>
              <input type="checkbox" names="i" id="i" />
            </th>
            <th>
              <input type="checkbox" names="u" id="u" />
            </th>
            <th>
              <input type="checkbox" names="e" id="e" />
            </th>
            <th>
              <input type="checkbox" names="o" id="o" />
            </th>
          </tr>
        </tbody>
        {rows}
      </table>
    </section>
  );
};
export default Tables;
