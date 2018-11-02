import {connect} from 'react-redux';
import Question from '../components/Question';
import {fetchQuestion, selectOption} from '../actions';

function mapStateToProps (state) {
  console.log('Step 1. calling mapStateToProps in QuestionContainer')
  
  return {
    currentQuestion:state.question,
    currentScore: state.score
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchQuestion: () => {
      console.log('Step 3. getting action creator')
      dispatch(fetchQuestion())
    },
    selectOption: (selected) => {
      dispatch(selectOption(selected))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Question);
