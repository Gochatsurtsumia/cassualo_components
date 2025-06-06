import React, { useState, useEffect } from "react";
import "../styles/DateTimePicker.css";

const DateTimePicker = () => {
  const [time, setTime] = useState("12:30");
  const [date, setDate] = useState("2023-11-07");

  useEffect(() => {
    // Initial values (already set via useState, but you can fetch from props or API here)
    setTime("12:30");
    setDate("2023-11-07");
  }, []);

  return (
    <div className="container">
      <form id="dateTimeForm">
        <div className="input-container">
          <div className="input-wrapper">
            <input
              type="time"
              id="timeInput"
              name="timeInput"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <input
              type="date"
              id="dateInput"
              name="dateInput"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DateTimePicker;
