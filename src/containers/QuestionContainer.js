import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestion, receiveAnswer } from '../actions';

const mapStateToProps = state => {
    return {
        question: state.question
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: () => dispatch(fetchQuestion()),
        receiveAnswer: (answer, question) => dispatch(receiveAnswer(answer, question))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)