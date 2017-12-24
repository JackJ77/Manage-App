import * as types from './actionTypes';

export function createTask(task) {
  return { type: types.CREATE_TASK, task };
}

export function deleteTask(id) {
  return { type: types.DELETE_TASK, id };
}
