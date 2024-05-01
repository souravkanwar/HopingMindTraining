import React from 'react';
import { useState } from 'react';
import axios from 'axios';
function Contact() {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [Subject ,setSubject]=useState('');
    const [message , setMessage]=useState('');
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleSubject=(e)=>{
        setSubject(e.target.value)
    }

    const handleMessage=(e)=>{
        setMessage(e.target.value)
    }
    
    const handleClear=()=>{
        setName('')
    }

    const handleClick = async (e) => {
        e.preventDefault();   
        const data = {
            name:name,
            email: email,
            Subject: Subject,
            message:message
        };
    
        try {
            const response = await axios.post('https://dummy.restapiexample.com/api/v1/create', data);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    


    return (
        <div className='Contact'>
            <div className='inner_container'>
                <div className='about'>
                    <h2>CONTACT</h2>
                    <p>Lets get in touch.Send us a message</p>
                </div>
                <div>
                    <div className='contact_Icon'>
                        <img src="images/location.png" />
                        <p>Location</p>
                    </div>
                    <div className='contact_Icon'>
                        <img src="images/telephone.png"></img>
                        <p>Phone</p>
                    </div>
                    <div className='contact_Icon'>
                        <img src="images/mail.png"></img>
                        <p>Emails</p>
                    </div>
                </div>
                <div className='contact_form'>
                    {name}
                    <input onChange={handleName} value={name} placeholder='Name' type='text' />
                    {email}
                    <input onChange={handleEmail} value={email} placeholder='Email' type='text' />
                    {Subject}
                    <input onChange={handleSubject} value={Subject} placeholder='Subject' type='text' />
                    {message}
                    <input onChange={handleMessage} value={message} placeholder='Message' type='text' />
                    <button onClick={handleClick} className='btn'> View Our Works</button>
                    <button onClick={handleClear}>clear  Message</button>
                </div>
                <div className='city_img'>
                    <img src='images/city.png' />
                </div>
            </div>
        </div>
    )
}

export default Contact
