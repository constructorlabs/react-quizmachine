import { combineReducers } from 'redux';
import question from './question';
import points from './points'
import content from './content'

export default combineReducers({
  question,
  points,
  content
});
