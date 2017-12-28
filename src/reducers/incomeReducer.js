import * as types from '../actions/actionTypes';

export default function incomeReducer(state = [], action) {
  switch(action.type) {
    case types.ADD_INCOME:
      return [...state, { note: action.note, val: action.val }];
    default:
      return state;
  }
}
