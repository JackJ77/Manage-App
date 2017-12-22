import * as types from '../actions/actionTypes';

export default function deleteTaskReducer(state = [], action) {
  switch (action.type) {
    case types.DELETE_TASK:
      return state;
    default:
      return state;
  }
}
