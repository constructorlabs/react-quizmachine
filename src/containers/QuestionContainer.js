import { connect } from 'react-redux'
import Question from '../components/Question';
import { fetchQuestion } from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        quizQuestion: reduxStore.quizQuestion
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestQuestion: () => dispatch(fetchQuestion())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);