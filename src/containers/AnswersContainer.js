import { connect } from 'react-redux'
import Answers from '../components/Answers';
import { isRightAnswer, scoreUpdate, fetchQuestion } from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        answers: reduxStore.quizQuestion,
        score: reduxStore.score
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestQuestion: () => dispatch(fetchQuestion()),
        scoreUpdate: score => dispatch(scoreUpdate(score)),
        isRightAnswer: isRight => dispatch(isRightAnswer(isRight))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Answers);