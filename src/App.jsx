import { useState } from "react";
import { kana } from "./data";
import "./App.css";
import Tables from "./components/Tables/Tables";

function App() {
  const [data, setData] = useState(kana);
  return <Tables data={data} />;
}

export default App;
