import { combineReducers } from 'redux';
import question from './question';
import scores from './scores';

export default combineReducers({
  question,
  scores
});
