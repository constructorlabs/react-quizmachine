import { connect } from 'react-redux';
import Question from '../components/Question';
import {} from '../actions';

const mapStateToProps = state => {
    return {
        question: state.question
    }
}

const mapDispatchToProps = dispatch => {
    console.log("Step 2: getting action creator")
    return {
        fetchQuestion: () => fetchQuestion()
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question)