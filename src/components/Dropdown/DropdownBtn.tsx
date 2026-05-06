import { LuChevronDown, LuChevronUp } from "react-icons/lu";

type DropdownBtnProps = {
  openState: boolean;
  toggleFunc: () => void;
  itemClass: string;
  children: React.ReactNode;
};

const DropdownBtn = ({
  openState,
  toggleFunc,
  itemClass,
  children,
}: DropdownBtnProps) => {
  return (
    <div
      className={`dropdown-btn ${itemClass ?? ""} ${openState ? "opened" : ""}`}
      onClick={toggleFunc}
    >
      <div className="dropdown-btn-text">
        <p>{children}</p>
      </div>
      <span className="dropdown-btn-icon">
        {!openState ? <LuChevronDown size={21} /> : <LuChevronUp size={21} />}
      </span>
      <div className="dropdown-btn-backdrop"></div>
    </div>
  );
};

export default DropdownBtn;
