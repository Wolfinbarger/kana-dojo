import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Tables = ({ hiragana, katakana }) => {
  const [regHiragana, setRegHirigana] = useState(hiragana.regular);
  const [comboHiragana, setComboHiragana] = useState(hiragana.combo);
  const [regKatakana, setRegKatakana] = useState(katakana.regular);
  const [comboKatakana, setComboKatakana] = useState(katakana.combo);

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
    </section>
  );
};
export default Tables;
