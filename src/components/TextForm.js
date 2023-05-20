import React, { useState } from 'react'
import './TextForm.css';


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "Success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "Success")
    }

    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("Cleared all the text in textbox", "Success")
    }

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard", "Success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Cleared Extra spaces", "Success")
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 class="head1">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button className="btn btn-success mx-1 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-2 my-2" onClick={handleExtraSpace}>Clear Space</button>
                <button className="btn btn-danger mx-2 my-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear text</button>

            </div>
            <div className="ak my-3 border-primary" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className={` text-summary text-${props.mode === 'light' ? 'white' : 'light'}`}>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2 className="my-2 preview ">Preview</h2>
                <p>{text.length === 0 ? "Enter some Text in the Text for Preview" : text}</p>
                <div>
                    <footer class="copyright">
                        &copy; 2023 Ankit Kumar
                    </footer>
                </div>

            </div>
        </>


    )
}
