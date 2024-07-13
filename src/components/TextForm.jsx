import React, { useState } from "react";
import jsPDF from "jspdf";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(12); // Initial font size

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(Number(event.target.value));
  };

  // Function to calculate word count
  const calculateWordCount = (inputText) => {
    const trimmedText = inputText.trim();
    const words = trimmedText.split(/\s+/);
    const filteredWords = words.filter((word) => word !== "");
    return filteredWords.length;
  };

  // Function to handle PDF export with user-selected font size
  const handleExportPDF = () => {
    if (!text) {
      alert("Nothing to export. Please enter some text.");
      return;
    }

    // Initialize jsPDF
    const doc = new jsPDF();

    // Set line height based on font size
    const lineHeight = 1.2; // Adjust line height multiplier as needed
    const pageHeight = doc.internal.pageSize.height - 20; // Height of each page
    const textLines = doc.splitTextToSize(text, doc.internal.pageSize.width - 20); // Adjust width as needed

    let y = 10;
    doc.setFontSize(fontSize); // Set user-selected font size

    textLines.forEach((line, index) => {
      if (y + fontSize > pageHeight) {
        doc.addPage();
        y = 10; // Reset y position for new page
      }
      doc.text(line, 10, y);
      y += fontSize * lineHeight;
    });

    // Save the PDF file
    doc.save("textutils-export.pdf");
  };

  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center mb-4">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "lightgrey",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-primary mx-2"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleClearText}
          >
            Clear Text
          </button>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <label htmlFor="fontSizeSelect" className="mr-2">Font Size:</label>
          <select
            className="form-control"
            id="fontSizeSelect"
            value={fontSize}
            onChange={handleFontSizeChange}
          >
            <option value={12}>12</option>
            <option value={14}>14</option>
            <option value={16}>16</option>
            <option value={18}>18</option>
            <option value={20}>20</option>
            <option value={22}>22</option>
            <option value={24}>24</option>
            <option value={26}>26</option>
          </select>
        </div>

        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-primary"
            onClick={handleExportPDF}
          >
            Export as PDF
          </button>
        </div>
      </div>

      {/* Preview Box with Margin Top */}
      <div className="container" style={{marginTop:"70px"}}>
        <div className="border p-3">
          <h2 className="text-center mb-3">Preview</h2>
          <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
