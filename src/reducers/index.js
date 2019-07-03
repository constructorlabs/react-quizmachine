import { combineReducers } from 'redux';
import question from './question';
import money from './money';
import endGame from './endGame';
import friend from './friend';
import fifty from './fifty';
import audience from './audience';
import reply from './reply';

export default combineReducers({
  question, // list of quiz data (usually right answer,question,4 possible answers)
  money, // contestants current score in the form of money
  endGame, // status of contestants current position - win, lose, walk
  friend, // friend status flag - ie has friend been used
  fifty,  // fifty flag
  audience, // audience flag
  reply // reponse from call a friend

});
