import * as types from '../actions/actionTypes';

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_TASK:
      return [...state, action.task];
    case types.DELETE_TASK:
    return [
      ...state.slice(0, action.id),
      ...state.slice(action.id + 1)
    ];
    default:
      return state;
  }
}
