import { useState } from "react";
import { kana } from "./data";
import CollapsibleKanaTable from "./components/Table/CollapsibleKanaTable";

const KanaPracticeApp = () => {
  const [data, setData] = useState(kana);
  return (
    <>
      {Object.entries(kana).map(([key, value]) => (
        <CollapsibleKanaTable key={key} scriptName={key} data={value} />
      ))}
    </>
  );
};

export default KanaPracticeApp;
