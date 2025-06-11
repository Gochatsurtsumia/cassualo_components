import React from "react";
import "../styles/switch.css";

const SwitchToggle = () => {
  return (
    <form>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <label className="switch">
        <input type="checkbox" disabled />
        <span className="slider-disabled"></span>
      </label>
    </form>
  );
};

export default SwitchToggle;
