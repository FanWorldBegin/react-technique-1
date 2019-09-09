import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  composeWithDevTools()
)


export default class ReduxFrom extends Component {
  render() {
    return (
      <Provider store={ store }>
        <h1>ReduxFrom</h1>
        <App />
      </Provider>
    )
  }
}


