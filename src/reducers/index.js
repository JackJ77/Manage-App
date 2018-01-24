import { combineReducers } from 'redux';
import tasks from './taskReducer';
import income from './incomeReducer';
import expense from './expenseReducer';


const rootReducer = combineReducers({
  tasks,
  expense,
  income
});

export default rootReducer;
