import { kana } from "./data";
import Tables from "./components/Tables/Tables";
import Kana from "./components/Kana/Kana";

const KanaPracticeApp = () => {
  return (
    <div className='container'>
      <div className='container__kana'>
        <Kana />
      </div>
      <div className='container__tables'>
        <Tables kana={kana} />
      </div>
    </div>
  );
};

export default KanaPracticeApp;
