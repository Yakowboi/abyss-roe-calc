import { useEffect, useRef, useState } from "react";
import DropdownBtn from "./Dropdown/DropdownBtn";
import DropdownContent from "./Dropdown/DropdownContent";
import DropdownItem from "./Dropdown/DropdownItem";

function Dropdown({ buttonText, dataObj }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState();
  const [selectedItemClass, setSelectedItemClass] = useState();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  const handleItemSelect = (valueFromItemName, valueFromItemClass) => {
    setSelectedItemName(valueFromItemName);
    setSelectedItemClass(valueFromItemClass);
    setIsOpen(false);

    console.log(`clicked: ${valueFromItemName}`);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <DropdownBtn
        openState={isOpen}
        toggleFunc={toggleDropdown}
        itemClass={selectedItemClass}
      >
        {!selectedItemName ? buttonText : selectedItemName}
      </DropdownBtn>
      <DropdownContent openState={isOpen}>
        {
          <>
            <DropdownItem
              itemId="none"
              itemClass=""
              itemName=""
              onItemSelect={handleItemSelect}
            >
              None
            </DropdownItem>
            {dataObj.data.map((item) => (
              <DropdownItem
                key={item.id}
                itemId={item.id}
                itemClass={item.rarity ?? item.id}
                itemName={item.name}
                onItemSelect={handleItemSelect}
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
