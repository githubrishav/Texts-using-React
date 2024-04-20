import React, { useState } from 'react'



export default function TextForm(props) {
  const changelower = () => {
    let secondText = text.toLocaleLowerCase();
    setText(secondText);
  }
  const changeUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleChange = (event) => {
    setText(event.target.value);

  }
  const [text, setText] = useState('');

  return (
    <>
      <div className="container"><h2>{props.Heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" id="textBox" rows="15" value={text} onChange={handleChange} placeholder='Enter Your Text'></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={changeUp}>Convert to Uppercase</button>
        <button className='btn btn-warning mx-1 my-1' onClick={changelower}>Convert to Lowercase</button>
        </div>
        <div className="container my-2">
          <h2>Your Text Summary Here</h2>
          <p>This has {text.split(" ").length} words and {text.length} chracters </p>
        </div>

    </>
  )
}
