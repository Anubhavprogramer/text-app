import React, {useState} from "react";

export default function Textform(props) {
  const handelupclick = () =>{
    let newtext=text.toUpperCase()
    settext(newtext)    
  }
  const handellowclick = () =>{
    let newtext=text.toLowerCase()
    settext(newtext)    
  }
  const handelonchange = (event) =>{
    settext(event.target.value)    
  }
  const[text,settext]=useState("Enter the text");
  return (
    <>
    <div className="container my-3">
      <h1>{props.heading }</h1>
      <div className="mb-3">
      <textarea className="form-control" id="box" onChange={handelonchange}value={text} rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handelupclick}>convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={handellowclick}>convert to upper case</button>
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        <p>Total words {text.split(" ").length} and Total characters {text.length}</p>
    </div>
    </>
   
    
  );
}
