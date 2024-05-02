import React from 'react';
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

function Login_Modal({openModal}) {


  return (
    <div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
        <div>I am a modal</div>
        
      </Modal>
    </div>
  );
}

export default Login_Modal