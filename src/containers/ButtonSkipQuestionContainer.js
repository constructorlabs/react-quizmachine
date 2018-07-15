import { connect } from 'react-redux'
import ButtonSkipQuestion from '../components/ButtonSkipQuestion';
import { fetchQuestion, isRightAnswer, scoreUpdate } from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        score: reduxStore.score
    };
};

const mapDispatchToProps = dispatch => {
    return {
        scoreUpdate: score => dispatch(scoreUpdate(score)),
        isRightAnswer: isRight => dispatch(isRightAnswer(isRight)),
        requestQuestion: () => dispatch(fetchQuestion())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonSkipQuestion);