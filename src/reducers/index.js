import { combineReducers } from 'redux';
import question from './question';
import money from './money';

export default combineReducers({
  question,
  money
});
