import { kana } from "./data";
import Tables from "./components/Tables/Tables";

const KanaPracticeApp = () => {
  return (
    <>
      <Tables kana={kana} />
    </>
  );
};

export default KanaPracticeApp;
