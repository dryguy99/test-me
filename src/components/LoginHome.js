import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import IndexLogin from './IndexLogin';
import './Login.css';
import LocalLogin from './LocalLogin';
import LocalSignup from './LocalSignup';
import ConnectLocal from './ConnectLocal';
/*import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'; */


//class Login extends Component {

class LoginHome extends Component {
  constructor(props) {
    super(props);

  this.state = {
    showModal:false
  }
  this.closeModal = this.closeModal.bind(this)
  this.openModal = this.openModal.bind(this)
  this.renderLocalLogin = this.renderLocalLogin.bind(this)
  this.renderLocalSignup = this.renderLocalSignup.bind(this)
  this.renderLogin = this.renderLogin.bind(this)
  this.renderConnectLocal = this.renderConnectLocal.bind(this)
}
  closeModal(){
    this.setState({showModal:false});
  }
  openModal(){
    this.setState({showModal:true});
  }

  compoentWillUpdate() {

  }
  renderLogin() {
      if (true) {
        return (
          <IndexLogin />
        );
      }
  }
  renderLocalLogin() {
    if (false) {
      return (
        <LocalLogin />
      );
    }
  }
  renderLocalSignup() {
    if (false) {
      return (
        <LocalSignup />
      );
    }
  }
  renderConnectLocal() {
    if (false) {
      return (
        <ConnectLocal />
      );
    }
  }
render() {
  /*const popover = (
    <Popover id="modal-popover" title="popover">
      very popover. such engagement
    </Popover>
  );
  const tooltip = (
    <Tooltip id="modal-tooltip">
      wow.
    </Tooltip>
  );*/

  return (
    <div>
      <Button
        bsStyle="primary"
        bsSize="large"
        onClick={this.openModal}
        >
          LOGIN
        </Button>

      <Modal show={this.state.showModal} onHide={this.closeModal} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">SIGN UP / SIGN IN</Modal.Title>
        </Modal.Header>
        <Modal.Body>

           { this.renderLogin() }
           { this.renderLocalLogin() }
           { this.renderLocalSignup() }

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
};

export default LoginHome;
