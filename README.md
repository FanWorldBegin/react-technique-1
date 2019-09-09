# react 技巧总结

## 1. react-router

```javascript
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

  render() {
    return (
      <Router>
      <div>
        <Navbar />
          <Jumbotron title="About Me!" subtitle="This page is all about me and my work!"/>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route exact path='/contact/:id' component={Contact}/>
        </div>
        <Footer />
      </Router>
    );
  }
```
## 2. React.PureComponent 无状态组件
### 1. 无状态组件
无状态组件不需要管理state, 只负责展示，没有refs属性。
```javascript
//Fragment 把并列的元素包裹起来不会引入多余元素
const Temp = (props) => {
  return (
    <Fragment>
      <li>ssss</li>
      <li>aaaa</li>
    </Fragment>
  )
}

```

### 2.发现父组件向无状态组件传入参数的时候，就算每次参数不变也会重复渲染
![image](https://github.com/FanWorldBegin/react-technique-1/blob/master/images/a.png)

判断值没变化则不刷新
![image](https://github.com/FanWorldBegin/react-technique-1/blob/master/images/b.png)

使用组件PureComponent
去掉shouldComponenetUpdate 不判断但当val不变时候也不会重复渲染

当组件更新时，如果组件的 props 和 state 都没发生改变，render 方法就不会触发，省去 Virtual DOM 的生成和比对过程，达到提升性能的目的。具体就是 React 自动帮我们做了一层浅比较：

```javascript
class Temp extends PureComponent {
  render() {
    return (
      <div>{this.props.val}</div>
    )
  }
}
```
## 3.Fragment
Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
```javascript
//Fragment 把并列的元素包裹起来不会引入多余元素
const Temp = (props) => {
  return (
    <Fragment>
      <li>ssss</li>
      <li>aaaa</li>
    </Fragment>
  )
}
```


## 4.context（上下文）
Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。不需要层层传递。
```javascript
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

```

## 5. 高阶组件（HOC）
1. 高阶组件是一个函数
2. 接受一个参数，参数为组件
3. 返回值是一个包裹后的组件

```javascript
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
```

## 6.高阶组件重构代码

### 1.高阶组件
* 请求url 将返回的数据显示出来
* 将请求部分与loading部分抽离出来，作为高阶组件
![image](https://github.com/FanWorldBegin/react-technique-1/blob/master/images/a.png)

### 2.使用
使用高阶组件传入请求的url,  和 完成当前功能的子组件
joker.js
```javascript
import React, { Component } from 'react';
//原始文件在component 里面
import {WithFetch} from './withFetch';
export const Joke = WithFetch('http://api.icndb.com/jokes/random/3')(props => {
  return (
    <div>
      {
        props.data.value.map(joke => (
          <p key={ joke.id }>{ joke.joke }</p>
        ))
      }
    </div>
  )
})
```

user.js
```javascript

import React from 'react';
//原始文件在component 里面
import {WithFetch} from './withFetch';
export const User = WithFetch('https://randomuser.me/api/')(props => {
  return (
    <h1>{props.data.results[0].email}</h1>
  )
})
```

## 7.react-powerplug
React 库 - 功能强大的可插入组件简化代码
重构前
```javascript
import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  render() {
    return (
      <div className="App">
        <div>Counter: { this.state.counter }</div>
        <button onClick={ this.increment }>Increment</button>
        <button onClick={ this.decrement }>Decrement</button>
      </div>
    );
  }
}

export default Counter;
```

重构后
```javascript
import React, { Component } from 'react';
import './App.css';
import { State } from 'react-powerplug'

class Counter extends Component {
  render() {
    return (
      <State initial={{ counter: 0 }}>
        {({ state, setState }) => (
          <div className="App">
            <div>Counter: { state.counter }</div>
            <button onClick={ () => setState({ counter: state.counter + 1 }) }>Increment</button>
            <button onClick={ () => setState({ counter: state.counter - 1 }) }>Decrement</button>
          </div>
        )}
      </State>
    );
  }
}

export default Counter;

```

## 8.返回多个组件
使用高阶组件
```javascript
import React, { Component } from 'react';
import './App.css';

// const Wrapper = ({ children }) => children; 这个相关于 const Wrapper = ( props ) => props.children;
const Wrapper = ({ children }) => children;

const Hello = ({ name }) => {
  return (
    <Wrapper>
      <h1>React 16 rocks</h1>
      <p>Hello, { name }!</p>
    </Wrapper>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="Hackages" />
      </div>
    );
  }
}

export default App;
```

## 9.defaultProps 和 类型检查 PropTypes part 1
### 1. 类组件设置defaultProps
```javascript
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
```

### 2.无状态组件
当父组件没有传入内容时候设置初始值,
```javascript
Hello.defaultProps = {
  name: '我是初始值'
}
const Hello = (props) => {
  return (
    <h3>Hello, {props.name}</h3>
  )
}
```

### 3. 类型检查 PropTypes 
```javascript
import PropTypes from 'prop-types';
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
```