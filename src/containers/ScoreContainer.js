import { connect } from 'react-redux'
import Score from '../components/Score';
// import { isRightAnswer } from '../actions';


export const mapStateToProps = reduxStore => {
    return {
        score: reduxStore.score
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         isRightAnswer: isRight => dispatch(isRightAnswer(isRight))
//     }
// };

export default connect(
    mapStateToProps,
    null
)(Score);