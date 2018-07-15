import { connect } from 'react-redux'
import Options from '../components/Options';
import {
    fetchQuestion,
    optionsDifficulty,
    optionsCategory,
    optionsCategoryName,
    updateReduxQuestionsAmount,
    currentQuestion
} from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        currentQuestionValue: reduxStore.currentQuestion
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestQuestionsUpdate: (category, difficulty, amount) => dispatch(fetchQuestion(category, difficulty, amount)),
        optionsDifficulty: difficulty => dispatch(optionsDifficulty(difficulty)),
        optionsCategory: category => dispatch(optionsCategory(category)),
        optionsCategoryName: categoryName => dispatch(optionsCategoryName(categoryName)),
        updateReduxQuestionsAmount: questionsAmount => dispatch(updateReduxQuestionsAmount(questionsAmount)),
        currentQuestion: questionsCount => dispatch(currentQuestion(questionsCount))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Options);