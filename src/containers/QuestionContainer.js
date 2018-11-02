import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestion } from '../actions';

const mapStateToProps = state => {
    console.log('Step 6 - calling mapStateToProps in QuestionContainer')
    return {
        question: state.question
    }
}

const mapDispatchToProps = dispatch => {
    console.log("Step 2: getting action creator")
    return {
        fetchQuestion: () => dispatch(fetchQuestion())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)