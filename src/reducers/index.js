import { combineReducers } from 'redux';
import question from './question';
import scores from './scores';
import category from './category';

export default combineReducers({
  question,
  scores,
  category
});
