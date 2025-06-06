import React, { useState } from "react";
import "../styles/placeholder.css"; // adjust path if your styles are elsewhere

const TextareaForm = () => {
  const [text, setText] = useState("");
  const maxLength = 256;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form>
      <textarea
        maxLength={maxLength}
        rows="5"
        cols="30"
        placeholder="Write text"
        value={text}
        onChange={handleChange}
        className={text.length >= maxLength ? "error" : ""}
        required
      />
      {text.length >= maxLength && (
        <div className="error-message">
          <p>Maximum character limit reached!</p>
        </div>
      )}

      <textarea
        disabled
        placeholder="Write text"
        value="Disabled textarea"
      />

      <textarea
        readOnly
        placeholder="Write text"
        value="Readonly textarea"
      />
    </form>
  );
};

export default TextareaForm;
