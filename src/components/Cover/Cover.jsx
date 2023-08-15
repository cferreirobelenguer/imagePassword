import React,{useState} from 'react';
import '../Cover/Cover.css';

const Cover = () => {
    const [blur, setBlur] =useState(10);
    const [data, setData] =useState ({
        name: '',
        password: ''
    })

    const handleName = (event) => {
        const inputValue = event.target.value;
        // data input name
        setData((prevData) => ({
            ...prevData,
            name: inputValue,
        }));
    }

    const handlePassword = (event) => {
        // function that focuses or blurs depending on whether data is entered in the password
        //data input password 
        const inputValue = event.target.value;
        setData((prevData) => ({
            ...prevData,
            password: inputValue,
        }));
        
        if (inputValue.length === 0) {
            document.body.style.backdropFilter = `blur(${blur}px)`;
        } else {
            const newBlurValue = 10-inputValue.length;
            setBlur(newBlurValue);
            document.body.style.backdropFilter = `blur(${blur}px)`;
        }
    }

    const handleClick = () =>{
        console.log(data)
    }

    const handlePasswordBlur = () => {
        // Restaurar el efecto de desenfoque a 10px cuando el campo pierda el foco
        setBlur(10);
        applyBlurStyle(10);
    };
    
    const applyBlurStyle = (blurValue) => {
        document.body.style.backdropFilter = `blur(${blurValue}px)`;
    };

    return (
        <div className="cover-container">
            <div className='cover-text'>
                <h1 className="cover-title">Image Password Strength</h1>
                <p className="cover-subtitle">Change the password to see the effect</p>
            </div>
            <div className='cover-form'>
                <div className='cover-input'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" placeholder="Enter Email" className='input-style' onChange={handleName}></input>
                </div>
                <div className='cover-input'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" maxLength={15} placeholder="Enter Password" className='input-style' onInput={handlePassword} onBlur={handlePasswordBlur}></input>
                </div>
            </div>
            <div className='cover-button'>
                <button className='button-style' onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}
export default Cover;