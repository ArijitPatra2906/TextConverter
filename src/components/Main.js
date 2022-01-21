import React, { useState } from "react";

export default function Main(props) {

   const handleUpClick = ()=>{
    //    console.log(text);
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted into uppercase!","success");
   }
   const handleLowClick = ()=>{
    // console.log(text);
    let myText = text.toLowerCase();
    setText(myText)
    props.showAlert("Converted into lowercase!","success");
    }
    const handleClearClick = ()=>{
        // console.log(text);
        let myText = "";
        setText(myText)
        props.showAlert("Cleared!","success");
        }
        const handleCopy = () =>{
            var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to clipboard","success");
        }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
  const [text, setText] = useState("");
  return (
      <>
    <div className="container" style ={{color: props.mode ==='dark'?'white':'#042723' }}>
      <h1>{props.heading}</h1>

      <textarea
        className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor : props.mode ==='dark'?'grey':'white' , color: props.mode ==='dark'?'white':'#042723'}}
        id="myBox"
        rows="8"
      ></textarea>
      <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick} >convert upper case </button>
      <button type="button" onClick={handleLowClick} className="btn btn-danger my-2 my-2">
        convert lower case
      </button>
      <button type="button" onClick={handleClearClick} className="btn btn-info my-2 my-2">
      Clear text
    </button>
    <button type="button" onClick={handleCopy} className="btn btn-secondary my-2 my-2">
    Copy text
  </button>
    </div>
    <div className="container" style ={{color: props.mode ==='dark'?'white':'#042723' }}>
    <h2>Your text summery</h2>
    <p>{text.split(" ").length} words and {text.length} characters.</p>
    <h2>Preview</h2>
    <p>{text.length>0?text: "Enter someting into the the text area to preview it here!!!" }</p>
    </div>
    </>
  );
}
