// import { useState } from "react";
import { fishData } from "./data/fish";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Here's a nice heading</h1>
      <select name="fish" id="fish-list">
        <option value="none">None</option>
        {fishData.data.map((fish) => (
          <option key={fish.id} value={fish.id} className={fish.rarity}>
            {fish.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
