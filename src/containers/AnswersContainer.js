import { connect } from 'react-redux'
import Answers from '../components/Answers';
import { isRightAnswer, scoreUpdate, fetchQuestion } from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        answers: reduxStore.quizQuestion,
        score: reduxStore.score,
        category: reduxStore.optionsCategory,
        difficulty: reduxStore.optionsDifficulty
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestQuestion: (category, difficulty) => dispatch(fetchQuestion(category, difficulty)),
        scoreUpdate: score => dispatch(scoreUpdate(score)),
        isRightAnswer: isRight => dispatch(isRightAnswer(isRight))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Answers);