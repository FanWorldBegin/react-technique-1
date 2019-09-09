import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <Link className="navbar-brand" to='/'>React Website</Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>PureComponent</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contact'>Fragment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/context'>context</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/highterOrderComponents'>高阶组件</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/highterOrderComponentsDemo'>用高阶组件重构代码</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/defaultProps'>DefaultProps 和 类型检查 PropTypes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/renderProps'>Render Props 代替 HOC</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/errorBoundary'>错误边界</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/newContext'>新的Context</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/children'>children</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/styledComponents'>Styled-Components</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/reduxFrom'>redux-form</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/portals'>portals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/portalsModal'>PortalsModal</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
