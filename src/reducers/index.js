import { combineReducers } from 'redux';
import question from './question';
import money from './money';
import endGame from './endGame';
import friend from './friend';
import fifty from './fifty';
import audience from './audience';

export default combineReducers({
  question,
  money,
  endGame,
  friend,
  fifty,
  audience

});
