import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const DropdownBtn = ({ openState, toggleFunc, children }) => {
  return (
    <div
      className={`dropdown-btn ${openState ? "opened" : ""}`}
      onClick={toggleFunc}
    >
      {children}
      <span className="dropdown-btn-icon">
        {!openState ? <LuChevronDown size={21} /> : <LuChevronUp size={21} />}
      </span>
      <div className="dropdown-btn-backdrop"></div>
    </div>
  );
};

export default DropdownBtn;
