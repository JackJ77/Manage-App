import * as types from '../actions/actionTypes';

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_TASK:
      return [...state, action.task];
    case types.DELETE_TASK:
      return state.filter((el, id) => {
        id !== action.id;
      });
    default:
      return state;
  }
}
