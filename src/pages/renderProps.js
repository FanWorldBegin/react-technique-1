//Render Props 代替 HOC（高阶组件）
import React from 'react';

//高阶组件
class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  // 调用Mouse时候传入一个render方法
  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={ this.handleMouseMove }>
        {this.props.render(this.state)}
      </div>
    )
  }
}

const Position = ({x, y}) => {
  return (
    <h1>The mouse position is ({ x }, { y })</h1>
  )
}
const Position2 = ({x, y}) => {
  return (
    <h1>The mouse position2 is ({ x }, { y })</h1>
  )
}
//将需要传入的组件通过render 方法传入
const App = () => {
  return (
    <div style={{ height: '100%' }}>
      <Mouse render={(props) => <Position {...props}/>} />
      <Mouse render={(props) => <Position2 {...props}/>} />
    </div>
  )
}



export default App;