#react 技巧总结

## react-router

### 1. 无状态组件
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
### 

### 2. 引入Router
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