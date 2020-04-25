import React, { useState } from 'react';
import Popup from '../components/popup'
import Back from "../components/back";

export default () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [firstnameError, setFirstnameError] = useState(true);
    const [lastnameError, setLastnameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [numberError, setNumberError] = useState(true);
    const [messageError, setMessageError] = useState(true);
    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        let emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        let numberPattern = /^([0-9]+)$/;
        switch (name) {
            case 'firstname':
                (value !== '') ? setFirstnameError(false) : setFirstnameError(true);
                setFirstname(value);
                break;
            case 'lastname':
                (value !== '') ? setLastnameError(false) : setLastnameError(true);
                setLastname(value);
                break;
            case 'email':
                (emailPattern.test(value)) ? setEmailError(false) : setEmailError(true);
                setEmail(value);
                break;
            case 'number':
                (numberPattern.test(value)) ? setNumberError(false) : setNumberError(true);
                setNumber(value);
                break;
            case 'message':
                (value !== '') ? setMessageError(false) : setMessageError(true);
                setMessage(value);
                break;
            default:
                break;
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let messageData = [firstname, lastname, email, number, message];
        let messageToken = Math.floor(Math.random() * 1000);
        localStorage.setItem(`Message id: ${messageToken}`, messageData);
    }
    return (
        <div className="col-sm-10">
            <div className="[ popupwrapper ]">
                <Popup header='Lets chat!' />
                <div className="[ popupwrapper_content ]">
                    <div className="[ contact-form ]">
                        <form onSubmit={handleSubmit}>
                            <label>Enter your first name</label>
                            <input type='text'
                                name='firstname'
                                onChange={handleChange}
                                className='form-control'
                            />
                            <p className={(firstnameError) ? 'error' : 'error__hide'}>Please enter a first name</p>
                            <br />
                            <label>Enter your last name</label>
                            <input type='text'
                                name='lastname'
                                onChange={handleChange}
                                className='form-control'
                            />
                            <p className={(lastnameError) ? 'error' : 'error__hide'}>Please enter a last name</p>
                            <br />
                            <label>Enter your email adress</label>
                            <input type='text'
                                name='email'
                                onChange={handleChange}
                                className='form-control'
                            />
                            <p className={(emailError) ? 'error' : 'error__hide'}>Please enter your email</p>
                            <br />
                            <label>Enter your phonenumber</label>
                            <input type='text'
                                name='number'
                                onChange={handleChange}
                                className='form-control'
                            />
                            <p className={(numberError) ? 'error' : 'error__hide'}>Please enter a correct number</p>
                            <br />
                            <label>Enter your message</label>
                            <textarea
                                name='message'
                                onChange={handleChange}
                                className='form-control'
                            />
                            <p className={(messageError) ? 'error' : 'error__hide'}>Please write something</p>
                            <br />
                            <input type="submit" disabled={firstnameError || lastnameError || emailError || messageError || numberError} className="[ buttons ]" />
                        </form>
                    </div>
                </div>
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                </div>
            </div>
        </div>

    );
}
