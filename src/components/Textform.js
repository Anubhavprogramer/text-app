import React, { useState } from "react";

export default function Textform(props) {
  const handelupclick = () => {
    if (text === "") {
      props.setAlert("Text box is empty", "warning");
    } else {
      props.setAlert("Text is converter to Upper case", "success");
    }
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handellowclick = () => {
    if (text === "") {
      props.setAlert("Text box is empty", "warning");
    } else {
      props.setAlert("Text is converted to Lower case", "success");
    }
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const copytoclipboard = () => {
    const textarea = document.querySelector("#box"); // Select by ID
    if (text === "") {
      props.setAlert("Text box is empty", "warning");
    } else {
      props.setAlert("Text is copied to clipboard", "success");
      textarea.select();
      document.execCommand("copy");
    }
  };
  
  const clearup = (event) => {
    if (text === "") {
      props.setAlert("Text box is empty", "warning");
    } else {
      props.setAlert("Text is cleared", "success");
      settext("");
    }
  };
  const handelonchange = (event) => {
    settext(event.target.value);
  };
  const [text, settext] = useState("");
  return (
    <>
      <div
        className={`container my-3 bg-${props.mode} text-${
          props.mode === "light" ? "Dark" : "light"
        } py-3`}
      >
        <h1>{props.heading}</h1>
        <div className={`mb-3 bg-${props.mode} `}>
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "Dark" : "light"
            }`}
            id="box"
            onChange={handelonchange}
            value={text}
            placeholder="Enter the text"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handelupclick}>
          Upper case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handellowclick}>
          Lower case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={copytoclipboard}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearup}>
          Clear
        </button>
      </div>
      <div
        className={`container bg-${props.mode} text-${
          props.mode === "light" ? "Dark" : "light"
        } py-3 `}
      >
        <h1>Your text summary</h1>
        <p>
          Total words{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and Total characters {text.length}
        </p>
      </div>
    </>
  );
}
