type DropdownContentProps = {
  children: React.ReactNode;
  openState: boolean;
};

const DropdownContent = ({ children, openState }: DropdownContentProps) => {
  return (
    <div className={`dropdown-content ${openState ? "opened" : ""}`}>
      {children}
    </div>
  );
};

export default DropdownContent;
