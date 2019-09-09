import React, { Component, PureComponent } from 'react';

class HigherOrderComponents extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <h2>高阶组件</h2>
          <Hello name='高阶组件传递值'></Hello>
        </div>
      </div>
    );
  }
}

export default HigherOrderComponents

//这个高阶组件返回传入的组件
const PropsLogger = (WrapperComponents) => {
  return class extends Component {
    render() {
      return <WrapperComponents {...this.props}/>
    }
  }
}
const Hello = PropsLogger((props) => {
  return (
    <p>{props.name}</p>
  )
})