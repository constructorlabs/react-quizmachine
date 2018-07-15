import { combineReducers } from 'redux';
import quizQuestion from './quizQuestion';
import quizAnswer from './quizAnswer';
import score from './score';
import optionsDifficulty from './optionsDifficulty';
import optionsCategory from './optionsCategory';
import optionsCategoryName from './optionsCategoryName';

export default combineReducers({
  quizQuestion,
  quizAnswer,
  score,
  optionsDifficulty,
  optionsCategory,
  optionsCategoryName
});
