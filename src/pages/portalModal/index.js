//制作模态框
import React, { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal';

class  PortalsModal extends Component {
  state = {
    show: false
  }
  showModal = () => {
    this.setState({
      show: !this.state.show
    })
  }
  closeModal = () => {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <div>
        <h1> 使用 React Portals 实现 Modal 框</h1>
        <button onClick={ () => this.showModal()}>Show Modal</button>

        <Modal show={ this.state.show } onClose={ () => this.closeModal() }>
          模态框
        </Modal>
      </div>
    );
  }
}

export default PortalsModal;