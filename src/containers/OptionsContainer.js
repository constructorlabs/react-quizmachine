import { connect } from 'react-redux'
import Options from '../components/Options';
import { fetchQuestion, optionsDifficulty, optionsCategory, optionsCategoryName } from '../actions';

// export const mapStateToProps = reduxStore => {
//     return {
//         quizQuestion: reduxStore.quizQuestion
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        requestQuestionsUpdate: (category, difficulty) => dispatch(fetchQuestion(category, difficulty)),
        optionsDifficulty: difficulty => dispatch(optionsDifficulty(difficulty)),
        optionsCategory: category => dispatch(optionsCategory(category)),
        optionsCategoryName: categoryName => dispatch(optionsCategoryName(categoryName))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Options);