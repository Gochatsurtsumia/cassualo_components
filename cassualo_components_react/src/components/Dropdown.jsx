import React from "react";
import "../styles/dropdown.css";

const Dropdown = () => {
  return (
    <form>
      <select id="options" name="options">
        <option value="option1">Select an option</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </form>
  );
};

export default Dropdown;
