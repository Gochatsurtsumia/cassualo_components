import React, { useState } from "react";
import "../styles/progress.css"

export default function ProgressBar({ indeterminate = false }) {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (!indeterminate) {
      setProgress((prev) => Math.min(prev + 10, 100));
    }
  };

  return (
    <div className="layout">
      <h3>{indeterminate ? "Indeterminate" : "Determinate"}</h3>

      <div className="progress-bar">
        {!indeterminate ? (
          <div className="progress" style={{ width: `${progress}%` }}></div>
        ) : (
          <div className="progress-track">
            <div className="progress-slider"></div>
          </div>
        )}
      </div>

      {!indeterminate && (
        <button onClick={increaseProgress}>Increase Progress</button>
      )}
    </div>
  );
}
