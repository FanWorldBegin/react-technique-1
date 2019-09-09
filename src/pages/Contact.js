import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';

//Fragment 把并列的元素包裹起来不会引入多余元素
const Temp = (props) => {
  return (
    <Fragment>
      <li>ssss</li>
      <li>aaaa</li>
    </Fragment>
  )
}
class Contact extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="container">
          <h1>Fragment</h1>
          <h2>Contact{this.props.match.params.id}</h2>
          <ul>
            <Temp></Temp>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact
