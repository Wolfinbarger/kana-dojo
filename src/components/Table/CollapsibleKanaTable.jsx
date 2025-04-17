import { useState } from "react";

const CollapsibleKanaTable = ({ scriptName, data }) => {
  const [kana, setKana] = useState(data);

  const lookInKana = () => {
    const obj = kana;
    console.log(Object.keys(kana));
  };

  lookInKana();
  return (
    <>
      {Object.keys(kana).map((table) => (
        <p>{table}</p>
      ))}
      {/* <details>
        <summary>
          <thead>
            <th></th>
            <th>a</th>
            <th>e</th>
            <th>i</th>
            <th>o</th>
            <th>u</th>
          </thead>
          <tbody>{""}</tbody>
        </summary>
      </details> */}
    </>
  );
};

export default CollapsibleKanaTable;
