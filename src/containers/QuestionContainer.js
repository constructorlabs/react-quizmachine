import {connect} from 'react-redux';
import Question from '../components/Question';
// import Score from '../components/Score';
import {fetchQuestion, selectOption} from '../actions';

function mapStateToProps (state) {
  console.log('Step 1. calling mapStateToProps in QuestionContainer')

  return {
    currentQuestion:state.question
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


export const connector = connect(mapStateToProps,mapDispatchToProps);

export const QuestionContainer = connector(Question);
// export const ScoreContainer = connector(Score);
