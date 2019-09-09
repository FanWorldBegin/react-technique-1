import React, { Component } from 'react';
import PropTypes from 'prop-types';

//作为一个父组件，当接受到的子组件无问题则返回
class ErrorBoundary extends Component {
  //类型检查
  static propTypes = {
    //children是下面任何一个都可以
    children: PropTypes.oneOfType([
      PropTypes.node, //节点，一个可渲染的任何对象, 对象字符串，组件。。。
      PropTypes.arrayOf(PropTypes.node), //数组
    ]).isRequired
  }

  state = {
    hasError: false,
    error: null,
    errorInfo: null
  }

  // 类似于 try / catch 会捕获一些错误
  //error, errorInfo 是生命周期规定好的，捕获到错误则保存起来
  //当子组件捕获到错误后马上触发生命周期函数

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    //为了重复使用使用render Props
    if (this.state.hasError) {
      return <div>{ this.props.render(this.state.error, this.state.errorInfo) }</div>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;