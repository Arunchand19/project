import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        setText("you have clicked on handleup");   //uppercase
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted into uppercase','success');    //giving alert
    }

    const handleLoClick = () => {
        setText("you have clicked on handlelow");  //lowercase
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted into lowercase','success');
    }

    const handleClearClick = () => {
        setText("");   //clear text
        props.showAlert('text cleared','success');
    }

    const handleOnChange = (event) => {     //event is used to rewrite text and change text
        setText(event.target.value);  
    }

    const handleCopy = () => {
        var textArea = document.getElementById("mybox");         //copying text function
        if (textArea) {
            textArea.select();
            navigator.clipboard.writeText(textArea.value);
            props.showAlert("text copied","success");
        }
    }
    const handleExtraSpaces =()=>{
      let newText=text.split(/[ ]+/);       //remove extra spaces
      setText(newText.join(" "))
      props.showAlert("extraspaces been removed","success");
    }

    const [text, setText] = useState('');
    
return (
        <>
            <div>
                <div className="container"></div>
               {/*} <h1>{props.heading}</h1>*/}        {/*//changing the color of heading*/}
               <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="10"></textarea>
                </div>       {/*changing color and background color of text area*/}
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extraspaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in textbox to preview it'}</p> {/*ternary operator*/}
            </div>
        </>
    )
}
