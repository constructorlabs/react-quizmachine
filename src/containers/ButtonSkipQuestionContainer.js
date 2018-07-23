import { connect } from 'react-redux'
import ButtonSkipQuestion from '../components/ButtonSkipQuestion';
import {
    fetchQuestion,
    isRightAnswer,
    scoreUpdate,
    currentQuestion
} from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        score: reduxStore.score,
        category: reduxStore.optionsCategory,
        difficulty: reduxStore.optionsDifficulty,
        currentQuestion: reduxStore.currentQuestion,
        totalQuestions: reduxStore.updateReduxQuestionsAmount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        scoreUpdate: score => dispatch(scoreUpdate(score)),
        isRightAnswer: isRight => dispatch(isRightAnswer(isRight)),
        requestQuestion: (category, difficulty) => dispatch(fetchQuestion(category, difficulty)),
        incrementCurrentQuestion: current => dispatch(currentQuestion(current))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonSkipQuestion);