import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  padding: 50
}

const modalStyle = {
  backgroundColor: "#fff",
  borderRadius: 5,
  border: "1px solid #eee",
  maxWidth: 500,
  minHeight: 300,
  maring: '0 auto',
  padding: 30,
  position: 'relative'
}

const footerStyle = {
  position: "absolute",
  bottom: 20
}
//获取根Dom
const modalRoot = document.getElementById('ModalRoot'); 

class Modal extends Component {

  constructor(props) {
    super(props)
    //创建一个div放到 modalRoot,卸载时候删除div - 删除内容
    this.el = document.createElement("div");
  }
  onKeyUp = (e) => {
    // esc e.which == 27 27是esc 编码
    if (e.which === 27 && this.props.show) {
      this.props.onClose()
    }
  }
  componentDidMount() {
    //绑定键盘事件
    document.addEventListener('keyup', this.onKeyUp);
    modalRoot.appendChild(this.el);
  }
  //卸载组件销毁事件监听
  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp);
    //删除内容
    modalRoot.removeChild(this.el)
  }
  render() {
    const modalUI = (
      <div style={ backdropStyle }>
        <div style={ modalStyle }>
          {/* 将children显示出来 */}
          { this.props.children }

          <div style={ footerStyle }>
            <button onClick={ (e) => this.props.onClose() }>
              Close
            </button>
          </div>
        </div>
      </div>
    )
    // 通过show判断是否显示
    if (!this.props.show) {
      return null;
    }
    return ReactDOM.createPortal(
      modalUI, this.el
    )
  }
}

export default Modal;