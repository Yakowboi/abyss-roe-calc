type DropdownItemProps = {
  children: React.ReactNode;
  itemId: string;
  itemClass: string;
};

const DropdownItem = ({ children, itemId, itemClass }: DropdownItemProps) => {
  return (
    <div id={itemId} className={`dropdown-content-item ${itemClass ?? ""}`}>
      {children}
    </div>
  );
};

export default DropdownItem;
