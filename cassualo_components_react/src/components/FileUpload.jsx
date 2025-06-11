import React from "react";
import "../styles/file.css";
import uploadIcon from "../assets/Vector.png"; // Make sure this path matches your file structure

const FileUpload = () => {
  return (
    <form id="form" action="/upload">
      <label htmlFor="file">
        <img src={uploadIcon} alt="Upload Icon" />
        <input type="file" name="file" id="file" hidden />
        <div className="file-text">
          <p>
            Drop your files here or <strong>choose file</strong>
          </p>
        </div>
      </label>
    </form>
  );
};

export default FileUpload;
