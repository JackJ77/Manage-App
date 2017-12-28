import { combineReducers } from 'redux';
import tasks from './taskReducer';
import income from './incomeReducer';
import expenses from './expenseReducer';


const rootReducer = combineReducers({
  tasks,
  income,
  expenses
});

export default rootReducer;
