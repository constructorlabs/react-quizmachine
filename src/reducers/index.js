import { combineReducers } from 'redux';
import quizQuestion from './quizQuestion';
import quizAnswer from './quizAnswer';
import score from './score';
import optionsDifficulty from './optionsDifficulty';
import optionsCategory from './optionsCategory';
import optionsCategoryName from './optionsCategoryName';
import currentQuestion from './currentQuestion';
import updateReduxQuestionsAmount from './updateReduxQuestionsAmount';

export default combineReducers({
  quizQuestion,
  quizAnswer,
  score,
  optionsDifficulty,
  optionsCategory,
  optionsCategoryName,
  currentQuestion,
  updateReduxQuestionsAmount
});
