type DropdownItemProps = {
  children: React.ReactNode;
  itemId: string;
  itemClass: string;
  itemName: string;
  onItemSelect: (
    nameValue: string,
    classValue: string,
    idValue: string,
  ) => void;
};

const DropdownItem = ({
  children,
  itemId,
  itemClass,
  itemName,
  onItemSelect,
}: DropdownItemProps) => {
  return (
    <div
      id={itemId}
      className={`dropdown-content-item ${itemClass ?? ""}`}
      onClick={() => onItemSelect(itemName, itemClass, itemId)}
    >
      <p>{children}</p>
    </div>
  );
};

export default DropdownItem;
