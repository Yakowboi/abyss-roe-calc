import { useState } from "react";
import DropdownBtn from "./Dropdown/DropdownBtn";
import DropdownContent from "./Dropdown/DropdownContent";
import DropdownItem from "./Dropdown/DropdownItem";

function Dropdown({ buttonText, dataObj }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      {/* <select name="fish" id="fish-list">
        <option value="none">None</option>
        {dataObj.data.map((obj) => (
          <option key={obj.id} value={obj.id} className={obj.rarity}>
            {obj.name}
          </option>
        ))}
      </select> */}

      <DropdownBtn openState={isOpen} toggleFunc={toggleDropdown}>
        {buttonText}
      </DropdownBtn>
      <DropdownContent openState={isOpen}>
        {
          <>
            {dataObj.data.map((item) => (
              <DropdownItem
                key={item.id}
                itemId={item.id}
                itemClass={item.rarity ?? item.id}
              >
                {item.name}
              </DropdownItem>
            ))}
          </>
        }
      </DropdownContent>
    </div>
  );
}

export default Dropdown;
