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
![image](https://github.com/FanWorldBegin/react-technique-1/blob/master/images/a.png)