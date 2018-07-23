import { connect } from 'react-redux'
import Answers from '../components/Answers';
import {
    viewMessage,
    isRightAnswer,
    scoreUpdate,
    fetchQuestion,
    currentQuestion,
    generateArray
}
    from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        randomArray: reduxStore.randomArray,
        answers: reduxStore.quizQuestion,
        score: reduxStore.score,
        category: reduxStore.optionsCategory,
        difficulty: reduxStore.optionsDifficulty,
        currentQuestion: reduxStore.currentQuestion,
        totalQuestions: reduxStore.updateReduxQuestionsAmount
    };
};

const mapDispatchToProps = dispatch => {
    return {
        generateArray: array => dispatch(generateArray(array)),
        requestQuestion: (category, difficulty) => dispatch(fetchQuestion(category, difficulty)),
        scoreUpdate: score => dispatch(scoreUpdate(score)),
        isRightAnswer: isRight => dispatch(isRightAnswer(isRight)),
        incrementCurrentQuestion: current => dispatch(currentQuestion(current)),
        viewMessage: isVisible => dispatch(viewMessage(isVisible))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Answers);