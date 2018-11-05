import { connect } from "react-redux";
import Questions from  "../components/Questions";
// import { setQuery, submitQuery } from "../actions"
import { fetchQuestionAPI, score, image } from '../actions';



// fetchQuestion={this.props.fetchQuestion}

const mapStateToProps = state => {
    return {
        questions: state.questionsResults.questions,
        image: state.image        

           //name of prop being passed down(object)  : state:(importedreducercomponent).(key of object)
    };
}



const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: () => dispatch(fetchQuestionAPI()),
        clickHandler: (isCorrect) => {
            dispatch(score(isCorrect)),
            dispatch(fetchQuestionAPI())
        }
    };
}


export default connect(
    mapStateToProps, mapDispatchToProps
    )(Questions);