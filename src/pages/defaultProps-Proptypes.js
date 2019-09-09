import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class DefaultProps extends Component {
  onChange = () => {
  }
  state = {
    movies: [
      {id:1, title: 'title 1', visit_count: 1},
      {id:2, title: 'title 2', visit_count: 2},
    ]
  }
  render() {
    return (
      <div className="container">
        <h1>DefaultProps</h1>
        <Hello name='defaultProps'/>
        <h1>类型检查 PropTypes</h1>
        <Money money={11111} name={'字符串类型'} 
        onChange={this.onChange}
        movies={this.state.movies}
        />
      </div>
    );
  }
}

export default DefaultProps
//当父组件没有传入内容时候设置初始值,
//无状态组件
// Hello.defaultProps = {
//   name: '我是初始值'
// }
// const Hello = (props) => {
//   return (
//     <h3>Hello, {props.name}</h3>
//   )
// }

class Hello extends Component {
  static defaultProps = {
    name: '初始props',
  }
  render() {
    return (
      <h2>Hello, {this.props.name}</h2>
    )
  }
}

// PropTypes 类型校验,限制传入为数字
class Money extends Component {

  render() {
    return (
      <div>
        <h2>Hello, {this.props.money.toFixed(2)} {this.props.name}</h2>
        <ul>
          {
            this.props.movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
Money.propTypes = {
  money: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  // An object that could be one of many types
  //可以是数组中任何一个类型
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  //arrayOf 是数组
  //数组中元素是对象，对对象进行具体规范
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    visit_count: PropTypes.number
  }),

  ),



}