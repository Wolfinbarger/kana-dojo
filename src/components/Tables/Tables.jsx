import { v4 as uuidv4 } from "uuid";
import Table from "../Table/Table";

const Kanas = ({ kana }) => {
  const kanas = Object.keys(kana);

  return (
    <section>
      {Object.entries(kana).map(([key, value]) => {
        return (
          <details key={uuidv4()}>
            <summary>{key}</summary>
            <Table props={value} />
          </details>
        );
      })}
    </section>
  );
};
export default Kanas;
