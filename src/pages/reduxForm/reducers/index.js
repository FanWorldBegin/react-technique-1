import { combineReducers } from 'redux';

import users from './users';
import { reducer as formReducer } from 'redux-form'
// reducer 已经写好了
export default combineReducers({
  users,
  form: formReducer, //导出reducer
});
