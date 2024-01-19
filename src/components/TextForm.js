import React, { useState } from 'react'
import './TextForm.css';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "Success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "Success")
    }

    const CapitalizeEachWord = () => {
        let newText = text.replace(/\b\w/g, (match) => match.toUpperCase());
        setText(newText)
        props.showAlert("Capitalize Each Word", "Success")
    }

    const translateText = () => {
        const TargetLang = document.getElementById('sel').value;
        // console.log(TargetLang)

        const targetValue = `${TargetLang}`;
        const matchingOption = document.querySelector('#sel option[value="' + targetValue + '"]');

        try {
            const requestBody = {
                text: text,
                target_language: targetValue
            };

            fetch('https://hb9rk8gh74.execute-api.us-east-1.amazonaws.com/dev/textwise', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(data.body);
                    let newText = data.body
                    setText(newText)
                })
                .catch(error => console.error('Error fetching data:', error));

        } catch (error) {
            console.error('Error making the POST request:', error);
        }
        setTimeout(() => {
            props.showAlert(`Translated into ${matchingOption.text}`, "Success")
        }, 1000)

    }

    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
        props.showAlert("Cleared all the text in textbox", "Success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to Clipboard", "Success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[\s]+/g)
        setText(newText.join(" "))
        props.showAlert("Cleared Extra spaces", "Success")
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className="container row align-items-center" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className="head1">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3 border-2 rounded border-primary " value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button className="btn btn-success mx-1 my-2 col" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-success mx-2 my-2 col" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-success mx-2 my-2 col" onClick={CapitalizeEachWord}>Capitalize Each Word</button>
                <button className="btn btn-success mx-2 my-2 col" onClick={translateText}>Translate</button>
                <select id="sel" className="form-select col custom-select-medium mx-2 my-2 bg-danger text-white border-2 rounded border-primary">
                    <optgroup label="Indian languages">
                        <option aria-label="Bangla" value="bn">Bangla</option>
                        <option aria-label="English" value="en">English</option>
                        <option aria-label="Gujarati" value="gu">Gujarati</option>
                        <option value="hi" aria-label="Hindi">Hindi</option>
                        <option aria-label="Kannada" value="kn">Kannada</option>
                        <option aria-label="Malayalam" value="ml">Malayalam</option>
                        <option aria-label="Marathi" value="mr">Marathi</option>
                        <option aria-label="Punjabi" value="pa">Punjabi</option>
                        <option aria-label="Tamil" value="ta">Tamil</option>
                        <option aria-label="Telugu" value="te">Telugu</option>
                        <option aria-label="Urdu" value="ur">Urdu</option>
                    </optgroup>
                    <optgroup id="t_tgtAllLang" label="All languages">
                        <option aria-label="Afrikaans" value="af">Afrikaans</option>
                        <option aria-label="Albanian" value="sq">Albanian</option>
                        <option aria-label="Amharic" value="am">Amharic</option>
                        <option aria-label="Arabic" value="ar">Arabic</option>
                        <option aria-label="Armenian" value="hy">Armenian</option>
                        <option aria-label="Azerbaijani" value="az">Azerbaijani</option>
                        <option aria-label="Bangla" value="bn">Bangla</option>
                        <option aria-label="Bosnian" value="bs">Bosnian</option>
                        <option aria-label="Bulgarian" value="bg">Bulgarian</option>
                        <option aria-label="Canadian French" value="fr-CA">Canadian French</option>
                        <option aria-label="Catalan" value="ca">Catalan</option>
                        <option aria-label="Chinese" value="zh">Chinese</option>
                        <option aria-label="Chinese Traditional" value="zh-TW">Chinese Traditional</option>
                        <option aria-label="Croatian" value="hr">Croatian</option>
                        <option aria-label="Czech" value="cs">Czech</option>
                        <option aria-label="Danish" value="da">Danish</option>
                        <option aria-label="Dari" value="fa-AF">Dari</option>
                        <option aria-label="Dutch" value="nl">Dutch</option>
                        <option aria-label="English" value="en">English</option>
                        <option aria-label="Estonian" value="et">Estonian</option>
                        <option aria-label="Finnish" value="fi">Finnish</option>
                        <option aria-label="French" value="fr">French</option>
                        <option aria-label="Georgian" value="ka">Georgian</option>
                        <option aria-label="German" value="de">German</option>
                        <option aria-label="Greek" value="el">Greek</option>
                        <option aria-label="Gujarati" value="gu">Gujarati</option>
                        <option aria-label="Haitian Creole" value="ht">Haitian Creole</option>
                        <option aria-label="Hausa" value="ha">Hausa</option>
                        <option aria-label="Hebrew" value="he">Hebrew</option>
                        <option aria-label="Hindi" value="hi">Hindi</option>
                        <option aria-label="Hungarian" value="hu">Hungarian</option>
                        <option aria-label="Icelandic" value="is">Icelandic</option>
                        <option aria-label="Indonesian" value="id">Indonesian</option>
                        <option aria-label="Irish" value="ga">Irish</option>
                        <option aria-label="Italian" value="it">Italian</option>
                        <option aria-label="Japanese" value="ja">Japanese</option>
                        <option aria-label="Kannada" value="kn">Kannada</option>
                        <option aria-label="Kazakh" value="kk">Kazakh</option>
                        <option aria-label="Konkani" value="gom">Konkani</option>
                        <option aria-label="Korean" value="ko">Korean</option>
                        <option aria-label="Latvian" value="lv">Latvian</option>
                        <option aria-label="Lithuanian" value="lt">Lithuanian</option>
                        <option aria-label="Malay" value="ms">Malay</option>
                        <option aria-label="Malayalam" value="ml">Malayalam</option>
                        <option aria-label="Maltese" value="mt">Maltese</option>
                        <option aria-label="Marathi" value="mr">Marathi</option>
                        <option aria-label="Mongolian" value="mn">Mongolian</option>
                        <option aria-label="Norwegian" value="no">Norwegian</option>
                        <option aria-label="Pashto" value="ps">Pashto</option>
                        <option aria-label="Persian" value="fa">Persian</option>
                        <option aria-label="Polish" value="pl">Polish</option>
                        <option aria-label="Portuguese" value="pt">Portuguese</option>
                        <option aria-label="Punjabi" value="pa">Punjabi</option>
                        <option aria-label="Romanian" value="ro">Romanian</option>
                        <option aria-label="Russian" value="ru">Russian</option>
                        <option aria-label="Serbian" value="sr">Serbian</option>
                        <option aria-label="Sinhala" value="si">Sinhala</option>
                        <option aria-label="Slovak" value="sk">Slovak</option>
                        <option aria-label="Slovenian" value="sl">Slovenian</option>
                        <option aria-label="Somali" value="so">Somali</option>
                        <option aria-label="Spanish" value="es">Spanish</option>
                        <option aria-label="Swahili" value="sw">Swahili</option>
                        <option aria-label="Swedish" value="sv">Swedish</option>
                        <option aria-label="Tamil" value="ta">Tamil</option>
                        <option aria-label="Telugu" value="te">Telugu</option>
                        <option aria-label="Thai" value="th">Thai</option>
                        <option aria-label="Turkish" value="tr">Turkish</option>
                        <option aria-label="Ukrainian" value="uk">Ukrainian</option>
                        <option aria-label="Urdu" value="ur">Urdu</option>
                        <option aria-label="Uzbek" value="uz">Uzbek</option>
                        <option aria-label="Vietnamese" value="vi">Vietnamese</option>
                        <option aria-label="Welsh" value="cy">Welsh</option>
                    </optgroup>
                </select>
            </div>
            <button className="btn btn-danger mx-1 my-2" onClick={handleExtraSpace}>Clear Space</button>
            <button className="btn btn-danger mx-2 my-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear text</button>
            <div className="ak my-3 border-primary" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className={` text-summary text-${props.mode === 'light' ? 'white' : 'light'}`}>Text Analytics and Reading Time Overview</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words, {text.length}characters</p>
                <p>{(0.005 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length).toFixed(2)} Minutes to read</p>
                <h2 className="my-2 preview ">Preview</h2>
                <p>{text.length === 0 ? "Nothing to Preview" : text}</p>
            </div>
        </>
    )
}
