import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


const ThemeContext = React.createContext();
class Context extends Component {

  // 返回Context 对象，方法名字是预定好的
  // 定义传递内容
  getChildContext() {
    return {
      color: 'red'
    }
  }
  render() {
    return (
      <ThemeContext.Provider value={{ color: 'red' }}>
        <div className="container">
          <h1>Context</h1>
          <Topic />
        </div>
      </ThemeContext.Provider>
    );
  }
}
//验证
Context.childContextTypes = {
  color: PropTypes.string
}
export default Context;



//Fragment 把并列的元素包裹起来不会引入多余元素
const Topic = (props) => {
  return (
    <div>
      <Comment></Comment>
    </div>
  )
}
//在comment 中取出context
class Comment extends React.Component  {
  static contextType = ThemeContext;
  render() {
    console.log(this.context)
    return (
      <div>取出context： {this.context.color}</div>
    )
  }
}


