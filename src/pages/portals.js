import React, { Component, PureComponent } from 'react';
import { createPortal } from 'react-dom';

const mainContainer = document.getElementById('root');
const portalContainer = document.getElementById('anotherRoot');

class HelloFromPortal extends React.Component {
  render() {
    return (
      <h1>I am rendered through a Portal.</h1>
    );
  }
}

class  Portals extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {createPortal(<HelloFromPortal />, portalContainer)}
      </div>
    );
  }
}

export default Portals