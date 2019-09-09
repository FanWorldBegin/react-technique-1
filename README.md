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
```javascript
class Temp extends PureComponent {
  render() {
    return (
      <div>{this.props.val}</div>
    )
  }
}
```