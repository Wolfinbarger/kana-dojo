import { kana } from "./data";
import CollapsibleKanaTable from "./components/Table/CollapsibleKanaTable";

const KanaPracticeApp = () => {
  return (
    <>
      {Object.entries(kana).map(([key, value]) => (
        <CollapsibleKanaTable key={key} scriptName={key} data={value} />
      ))}
    </>
  );
};

export default KanaPracticeApp;
