import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function SignUpModal(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState(null)

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSignup = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            userName:userName, 
            phone: phone,
        }
        console.log(data)
    }

    return (
        <div>
            <Modal
                isOpen={props.openSignUp}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form>
                    <div>
                        <label>FirstName</label>
                        <input name='firstName' value={firstName} onChange={handleFirstName} type='email' />
                    </div>
                    <div>
                        <label>LastName</label>
                        <input name='lastName' value={lastName} onChange={handleLastName} type='email' />
                    </div>
                    <div>
                        <label>userName</label>
                        <input name='userName' value={userName} onChange={handleUserName} type='email' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input name='email' value={email} onChange={handleEmail} type='email' />
                    </div>
                    <div>
                        <label>password</label>
                        <input name='password' value={password} onChange={handlePassword} type='password' />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input name='phone' value={phone} onChange={handlePhone} type='email' />
                    </div>
                    <button onClick={handleSignup}>signup here</button>
                </form>
            </Modal>
        </div>
    );
}

export default SignUpModal;