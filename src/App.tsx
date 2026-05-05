// import { useState } from "react";
import { fishData } from "./data/fish";
import Dropdown from "./components/Dropdown";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Dropdown
        buttonText="Button Text TESTING"
        content={<p>LOREM IPSUM</p>}
        dataObj={fishData}
      />
    </>
  );
}

export default App;
