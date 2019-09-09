//错误边界和生命周期函数 componentDidCatch
import React, { Component } from 'react';
import Broken from './broken';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
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
        <h1>Hello rails365</h1>
        <ErrorBoundary render={ (error, errorInfo) => <p>Error: { error.toString() }</p> }>
          <Broken />
        </ErrorBoundary>

        <div>Counter: { this.state.counter }</div>
        <button onClick={ this.increment }>Increment</button>
        <button onClick={ this.decrement }>Decrement</button>
      </div>
    );
  }
}

export default App;