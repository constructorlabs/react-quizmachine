import { connect } from 'react-redux'
import Answers from '../components/Answers';
import {
    viewMessage,
    isRightAnswer,
    scoreUpdate,
    fetchQuestion,
    currentQuestion
}
    from '../actions';

export const mapStateToProps = reduxStore => {
    console.log("reduxStore", reduxStore)
    return {
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