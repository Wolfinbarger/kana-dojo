import { kana } from "./data";
import Tables from "./components/Table/Kanas";

const KanaPracticeApp = () => {
  return (
    <>
      {Object.entries(kana).map(([key, value]) => (
        <Tables key={key} scriptName={key} data={value} />
      ))}
    </>
  );
};

export default KanaPracticeApp;
