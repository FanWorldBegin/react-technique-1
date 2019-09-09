import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

//Fragment 把并列的元素包裹起来不会引入多余元素
const Topic = (props) => {
  return (
    <div>
      <Comment></Comment>
    </div>
  )
}
const Comment = (props, context) => {
  return (
    <div>{context.color}</div>
  )
}

Comment.contextTypes = {
  color: PropTypes.string
}
class Context extends Component {
  getChildContext() {
    return {
      color: 'red'
    }
  }
  render() {
    const color = 'red';
    return (
      <div>
        <div className="container">
          <h1>Context</h1>
          <Topic/>
        </div>
      </div>
    );
  }
}
//验证
Context.childContextTypes = {
  color: PropTypes.string
}
export default Context;
