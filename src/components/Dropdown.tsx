import { useEffect, useRef, useState } from "react";
import DropdownBtn from "./Dropdown/DropdownBtn";
import DropdownContent from "./Dropdown/DropdownContent";
import DropdownItem from "./Dropdown/DropdownItem";

type BaseItem = {
  id: string;
  name: string;
  rarity?: string;
};

type DropdownProps<T extends BaseItem> = {
  buttonText: string;
  dataObj: { data: T[] };
  getIdHandler: (id: string) => void;
};

function Dropdown<T extends BaseItem>({
  buttonText,
  dataObj,
  getIdHandler,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState<string>("");
  const [selectedItemClass, setSelectedItemClass] = useState<string>("");
  const [selectedItemId, setSelectedItemId] = useState<string>("");

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

  const handleItemSelect = (
    valueFromItemName: string,
    valueFromItemClass: string,
    valueFromItemId: string,
  ) => {
    setSelectedItemName(valueFromItemName);
    setSelectedItemClass(valueFromItemClass);
    setSelectedItemId(valueFromItemId);
    setIsOpen(false);

    getIdHandler(valueFromItemId);
    console.log(`previous id: ${selectedItemId}`);
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
