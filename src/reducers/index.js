import { combineReducers } from 'redux';
import difficulty from './difficulty';
import stage from './stage';
import trivia from './trivia';
import response from './response';
import score from './score';
import lives from './lives';
import progress from './progress';
import triviaType from './triviaType';
import category from './category';
import allCategories from './allCategories';

export default combineReducers({
  difficulty,
  stage,
  trivia,
  response,
  score,
  lives,
  progress,
  triviaType,
  category,
  allCategories,
});
