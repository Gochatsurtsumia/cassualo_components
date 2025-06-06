import React from "react";
import "../styles/radio.css";

const RadioButtons = () => {
  return (
    <form>
      <input type="radio" id="first" name="radioGroup" />
      <input type="radio" id="second" name="radioGroup" disabled />
    </form>
  );
};

export default RadioButtons;
