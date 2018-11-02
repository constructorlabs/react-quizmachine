import { combineReducers } from 'redux';
import question from './question';
import points from './points'

export default combineReducers({
  question,
  points
});
