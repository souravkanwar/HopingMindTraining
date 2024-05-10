import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from 'axios';
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

function Login_Modal(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
    console.log(data)
  }
  return (
    <div>
      <Modal isOpen={props.openModal}
        style={customStyles}
        contentLabel="Example Modal" >

        <form>
          <div>
            <label>Email</label>
            <input name='email' value={email} onChange={handleEmail} type='email' />
          </div>
          <div>
            <label>password</label>
            <input name='password' value={password} onChange={handlePassword} type='password' />
          </div>
          <button onClick={handleLogin}>Login here</button>
        </form>

      </Modal>
    </div>
  );
}

export default Login_Modal