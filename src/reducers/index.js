import { combineReducers } from 'redux';
import question from './question';
import score from './score';

export default combineReducers({
  question,
  score
});
