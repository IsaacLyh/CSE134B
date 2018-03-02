import * as types from './actionTypes';
import commentApi from '../api/mockComments';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCommentsSuccess(comments) {
  return { type: types.LOAD_COMMENTS_SUCCESS, comments};
}

export function createCommentSuccess(comment) {
  return {type: types.CREATE_COMMENTS_SUCCESS, comment};
}

export function updateCommentSuccess(comment) {
  return {type: types.UPDATE_COMMENTS_SUCCESS, comment};
}

export function loadComments() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return commentApi.getAllComments().then(comments => {
      dispatch(loadCommentsSuccess(comments));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveComment(comment) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return commentApi.saveComment(comment).then(comment => {
      comment.id ? dispatch(updateCommentSuccess(comment)) :
        dispatch(createCommentSuccess(comment));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
