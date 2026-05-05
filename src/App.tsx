// import { useState } from "react";
import { fishData } from "./data/fish";
import Dropdown from "./components/Dropdown";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Here's a nice heading</h1>

      <Dropdown buttonText="Select a Fish..." dataObj={fishData} />
    </>
  );
}

export default App;
