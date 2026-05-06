import { useState } from "react";
import { fishData } from "./data/fish";
import Dropdown from "./components/Dropdown";

function App() {
  const [fishId, setFishId] = useState();

  const getFishId = (selectedFishId) => {
    setFishId(selectedFishId);
  };

  return (
    <>
      <h1>Here's a nice heading</h1>
      <p>Selected Fish ID: {fishId ?? "Not selected yet"}</p>

      <Dropdown
        buttonText="Select a Fish..."
        dataObj={fishData}
        getIdHandler={getFishId}
      />
    </>
  );
}

export default App;
