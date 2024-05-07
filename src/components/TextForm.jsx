import React, { useState } from "react";

export default function TextForm(props) {
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

  const [text, setText] = useState("");

  // Function to calculate word count
  const calculateWordCount = (inputText) => {
    const trimmedText = inputText.trim();
    const words = trimmedText.split(/\s+/);
    const filteredWords = words.filter((word) => word !== "");
    return filteredWords.length;
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "lightgrey",
              color: props.mode === "dark" ? "lightblack" : "black",
            }}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 border-0" onClick={handleUpClick} style={{
          backgroundColor: props.mode === "light" ? " #5481FF" : "grey",
        
        }}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary border-0" onClick={handleLoClick} style={{
          backgroundColor: props.mode === "light" ? " #5481FF" : "grey",
        }}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2 my-2 border-0" onClick={handleClearText} style={{
          backgroundColor: props.mode === "light" ? " #5481FF" : "grey",
        }}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {calculateWordCount(text)}{" "}
          {calculateWordCount(text) === 1 ? "word" : "words"} and {text.length}{" "}
          characters
        </p>

        <p>{0.008 * calculateWordCount(text)} Minutes Read </p>
        <h2 className="my-2">Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
