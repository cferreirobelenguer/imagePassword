import React,{useState} from 'react';
import '../Cover/Cover.css';

const Cover = () => {
    const [blur, setBlur] =useState(10);
    const handleChange = (event) => {
        // function that focuses or blurs depending on whether data is entered in the password

        //data input password
        const inputValue = event.target.value;

        if (inputValue.length === 0) {
            document.body.style.backdropFilter = `blur(${blur}px)`;
        } else {
            const newBlurValue = 10-inputValue.length;
            setBlur(newBlurValue);
            document.body.style.backdropFilter = `blur(${newBlurValue}px)`;
        }
    }

    return (
        <div className="cover-container">
            <div className='cover-text'>
                <h1 className="cover-title">Image Password Strength</h1>
                <p className="cover-subtitle">Change the password to see the effect</p>
            </div>
            <div className='cover-form'>
                <div className='cover-input'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" placeholder="Enter Email" className='input-style'></input>
                </div>
                <div className='cover-input'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" maxlength="15" placeholder="Enter Password" className='input-style' onChange={handleChange}></input>
                </div>
            </div>
            <div className='cover-button'>
                <button className='button-style'>Submit</button>
            </div>
        </div>
    )
}
export default Cover;