import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from './UI/Login/Login';

const Register = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='primary' onClick={toggle}>
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login / Sign Up</ModalHeader>
        <ModalBody>
          <Login
            show={props.displayLogin}
            closeLogin={props.showHideLogin}
            login={props.login}
            logout={props.logout}
            handleChangeLogin={props.handleChangeLogin}
            error={props.error}
            username={props.username}
            isSigningIn={props.isSigningIn}
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default Register;
