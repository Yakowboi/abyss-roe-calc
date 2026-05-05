import DropdownBtn from "./Dropdown/DropdownBtn";
import DropdownContent from "./Dropdown/DropdownContent";
import DropdownItem from "./Dropdown/DropdownItem";

function Dropdown({ buttonText, content, dataObj }) {
  return (
    <div>
      <h1>Here's a nice heading</h1>
      {/* <select name="fish" id="fish-list">
        <option value="none">None</option>
        {dataObj.data.map((obj) => (
          <option key={obj.id} value={obj.id} className={obj.rarity}>
            {obj.name}
          </option>
        ))}
      </select> */}

      <DropdownBtn>{buttonText}</DropdownBtn>
      <DropdownContent />
      <DropdownItem />
    </div>
  );
}

export default Dropdown;
