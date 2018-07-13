import { connect } from 'react-redux'
import Answers from '../components/Answers';
import { isRightAnswer } from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        answers: reduxStore.quizQuestion
    };
};

const mapDispatchToProps = dispatch => {
    return {
        isRightAnswer: isRight => dispatch(isRightAnswer(isRight))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Answers);