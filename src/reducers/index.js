import { combineReducers } from 'redux';
import stage from './stage';
import trivia from './trivia';
import response from './response';
import allCategories from './allCategories';
import gif from './gif';
import user from './user';
import session from './session';
import highScores from './highScores';

export default combineReducers({
  stage,
  trivia,
  response,
  allCategories,
  gif,
  user,
  session,
  highScores,
});
