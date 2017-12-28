import * as types from './actionTypes';

export function createTask(task) {
  return { type: types.CREATE_TASK, task };
}

export function deleteTask(id) {
  return { type: types.DELETE_TASK, id };
}

export function addIncome(note, val) {
  return { type: types.ADD_INCOME, note, val };
}

export function addExpense(note, val) {
  return { type: types.ADD_EXPENSE, note, val };
}

export function deleteValue(id) {
  return { type: types.DELETE_VALUE, id };
}
