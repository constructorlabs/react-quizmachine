import { connect } from 'react-redux'
import Answers from '../components/Answers';
// import { fetchQuestion } from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        answers: reduxStore.quizQuestion
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         requestQuestion: () => dispatch(fetchQuestion())
//     }
// };

export default connect(
    mapStateToProps,
    null
)(Answers);