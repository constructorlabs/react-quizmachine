import { connect } from 'react-redux'
import Score from '../components/Score';
// import { isRightAnswer } from '../actions';


export const mapStateToProps = reduxStore => {
    return {
        score: reduxStore.score,
        categoryName: reduxStore.optionsCategoryName,
        difficulty: reduxStore.optionsDifficulty,
        totalQuestions: reduxStore.updateReduxQuestionsAmount,
        currentQuestion: reduxStore.currentQuestion
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