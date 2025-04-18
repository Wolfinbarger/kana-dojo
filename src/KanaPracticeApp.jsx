import { kana } from "./data";
import Tables from "./components/Table/Kanas";

const KanaPracticeApp = () => {
  return (
    <>
      <Tables kana={kana} />
    </>
  );
};

export default KanaPracticeApp;
