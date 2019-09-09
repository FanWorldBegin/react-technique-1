import React, { Component, PureComponent } from 'react';
//React.Children API 和 props.children 讲解
class Children extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <h2>React.Children API 和 props.children 讲解</h2>
          {/* 把app中的子元素传递给app */}
          <ChildrenEx>
            {
              `
              <ChildrenEx>
              我是子元素。。。。。
              </ChildrenEx>
              `
            }
          </ChildrenEx>
          <CloneElement>
            <li>CloneElement children1</li>
            <li>CloneElement children2</li>
            <li>CloneElement children3</li>
          </CloneElement>
        </div>
      </div>
    );
  }
}

export default Children


class ChildrenEx extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <h2>把ChildrenEx中的子元素，传递给ChildrenEx</h2>
          {this.props.children}

          <h2>通过 React.Children 进行map循环</h2>
          {
            React.Children.map(this.props.children, (child, i) => {
              if( i<1 ) return;
              return child
            })
          }
        </div>
      </div>
    );
  }
}

class CloneElement extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <h2>使用 CLoneElement </h2>
          <ul>
            {
              React.Children.map(this.props.children, (child, i) => {
                return React.cloneElement(child, {
                  name: 'CLoneElement'
                })
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}