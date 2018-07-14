import { connect } from 'react-redux'
import ButtonNext from '../components/ButtonNext';
import { fetchQuestion, isRightAnswer } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        isRightAnswer: isRight => dispatch(isRightAnswer(isRight)),
        requestQuestion: () => dispatch(fetchQuestion())
    }
};

export default connect(
    null,
    mapDispatchToProps
)(ButtonNext);