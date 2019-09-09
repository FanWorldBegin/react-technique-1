// 用高阶组件来重构代码
import React, { Component, PureComponent } from 'react';
import {Joke} from '../HOC/joker';
import {User} from '../HOC/user'
class HigherOrderComponentDemo extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <h2>用高阶组件重构代码</h2>
          <Joke name='高阶组件传递值' />
          <User/>
        </div>
      </div>
    );
  }
}

export default HigherOrderComponentDemo
