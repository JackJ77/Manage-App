import * as types from '../actions/actionTypes';

export default function expenseReducer(state = [], action) {
  switch(action.type) {
    case types.ADD_EXPENSE:
      return [...state, { note: action.note, val: action.val }];
    default:
      return state;
  }
}
