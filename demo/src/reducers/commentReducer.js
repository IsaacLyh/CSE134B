import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function commentReducer(state = initialState.comments, action) {
  switch (action.type) {
    case types.LOAD_COMMENTS_SUCCESS:
      return action.comments;

    case types.CREATE_COMMENTS_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.comment)
      ];

    case types.UPDATE_COMMENTS_SUCCESS:
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        Object.assign({}, action.comment)
      ];

    default:
      return state;
  }
}
