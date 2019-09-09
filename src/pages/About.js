import React, { Component, PureComponent } from 'react';

class About extends Component {
  state = {
    val: 1,
  }
  onNavigateHome = () => {
    this.props.history.push('/');
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        val: 1,
      })
    }, 2000)
  }
  // //判断是否更新，返回false不渲染
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextState', nextState);
  //   console.log('currentState', this.state);

  //   return (
  //     this.state.val == nextState.val ? false : true
  //   )
  // }
  render() {
    return (
      <div>
        <div className="container">
          <h2>无状态组件</h2>
          <button onClick={this.onNavigateHome} className='btn btn-promary'>Go Home!</button>
          <Temp val={this.state.val}/>
        </div>
      </div>
    );
  }
}

export default About

// const Temp = (props) => {
//   console.log('render Temp')
//   return (
//     <h3>{props.val}</h3>
//   )
// }

class Temp extends PureComponent {
  render() {
    return (
      <div>{this.props.val}</div>
    )
  }
}