import {combineReducers} from 'redux';
import courses from './courseReducer';
import comments from './commentReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  comments,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
