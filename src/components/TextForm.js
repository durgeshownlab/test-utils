import React, { useState } from 'react';
import PropTypes from 'prop-types'
import '../App.css';

export default function TextForm(props) {

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        setIsCopiedClicked(true);
        setCopyBtn('Copied');
        props.toast.success('Coppied', {
            position: props.toast.POSITION.BOTTOM_RIGHT,
          });

        setTimeout(()=>{
            setCopyBtn('Copy');
            setIsCopiedClicked(false);
        }, 1000)
    }

    const capitalize = (str)=> {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const handleEraseClick = ()=>{
        setText('');
        props.toast.success('Erased', {
            position: props.toast.POSITION.BOTTOM_RIGHT,
          });
    }

    const handleCapClick = ()=>{
        setText(capitalize(text));
        props.toast.success('Converted to captalized form', {
            position: props.toast.POSITION.BOTTOM_RIGHT,
          });

    }

    const handleLowerClick = ()=>{
        setText(text.toLowerCase());
        props.toast.success('Converted to lowercase', {
            position: props.toast.POSITION.BOTTOM_RIGHT,
          });

    }

    const handleUpperClick = ()=>{
        setText(text.toUpperCase());
        props.toast.success('Converted to uppercase', {
            position: props.toast.POSITION.BOTTOM_RIGHT,
          });
    }

    const handleExtraSpacesClick = ()=>{
        const newtext = text.split(/[ ]+/)
        setText(newtext.join(' '));
        props.toast.success('Extra White Space removed', {
            position: props.toast.POSITION.BOTTOM_RIGHT,
          });

    }

    const [text, setText] = useState('');
    const [copyBtn, setCopyBtn] = useState('Copy');
    const [isCopiedClicked, setIsCopiedClicked] = useState(false);
    
    return (
        <>
            <div className="d-flex justify-content-between row">
                <h1 className={`my-3 text-${props.mode==='light'?'dark':'light'} col-md`}>{props.heading}</h1>

                <div className='d-flex align-items-center justify-content-right col-md'>
                        <p className={`m-0 text-${props.mode==='light'?'dark':'light'}`} >Takes <code className='px-2'>{ parseFloat(0.008* text.split(" ").filter(item => item.length!==0).length).toFixed(2) }</code> Minutes to Read</p>

                        <span className="badge rounded-pill text-bg-success mx-2">Characters { text.length }</span>
                        <span className="badge rounded-pill text-bg-success">Words { text.split(' ').filter(item => item.length!==0).length}</span>
                </div> 

            </div>
            <div className="my-3">
                <textarea className={`form-control ${props.mode==='dark'?'white-placeholder':''}`} value={text} onChange={(e)=>{setText(e.target.value)}} id="myBox" rows="5" placeholder='Enter Text Here' style={props.mode==='light'?{backgroundColor: '#fff', color: '#495057'}:{backgroundColor: '#00102c', color: '#fff'}}></textarea>
            </div>
            <button className='btn btn-danger mx-2 my-1' onClick={handleEraseClick}>Erase All</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleUpperClick}>Uppercase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleLowerClick}>Lowercase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleCapClick}>Captalize</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleExtraSpacesClick}>Remove Exta Spces</button>
            <button className={`btn ${isCopiedClicked?'btn-outline-success':'btn-success'} mx-2 `} onClick={handleCopyClick}>{copyBtn}</button>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};