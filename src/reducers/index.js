import { combineReducers } from 'redux';
import question from './question';
import money from './money';
import endGame from './endGame';

export default combineReducers({
  question,
  money,
  endGame
});
