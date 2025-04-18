import { v4 as uuidv4 } from "uuid";

const Table = ({ props }) => {
  return (
    <>
      {Object.entries(props).map(([key, value]) => {
        return (
          <details key={uuidv4()}>
            <summary>{key}</summary>
            <table>
              <thead>
                <tr>
                  <th>*</th>
                  <th>a</th>
                  <th>i</th>
                  <th>u</th>
                  <th>e</th>
                  <th>o</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(value).map(([key, characters]) => {
                  return (
                    <tr key={uuidv4()}>
                      <td>{key === "vowels" ? " " : key}</td>
                      {characters.map((char) => {
                        return <td key={uuidv4()}>{char}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </details>
        );
      })}
    </>
  );
};

export default Table;
