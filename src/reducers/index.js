import { combineReducers } from 'redux';
import question from './question';
import money from './money';
import endGame from './endGame';
import lifeLine from './lifeLine';

export default combineReducers({
  question,
  money,
  endGame,
  lifeLine
});
