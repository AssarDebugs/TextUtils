
import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Upper case was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success")
  }

  const HandleOnChange= (event) =>{
    // console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('enter text here');
  return (
<>
      {/* <h1>{props.anotherheading}</h1> */}
      {/* <h2>{text}</h2> */}
      <h1 style={{color: props.mode==='light'?'black':'white'}}>TYPE HERE</h1>
<div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
<label htmlFor="mybox" className="form-label">{props.Heading}</label>
</div>
<textarea className="form-control" value={text} onChange={HandleOnChange} id="mybox" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}rows="8"></textarea>
<button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
<div className="container"style={{color: props.mode==='light'?'black':'white'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
</div>
</>
  )
}