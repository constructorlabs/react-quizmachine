import { connect } from "react-redux";
import Questions from  "../components/Questions";
// import { setQuery, submitQuery } from "../actions"
import { fetchQuestionAPI, score } from '../actions';


// fetchQuestion={this.props.fetchQuestion}

const mapStateToProps = state => {
    return {
        questions: state.questionsResults.questions

           //name of prop being passed down(object)  : state:(importedreducercomponent).(key of object)
    };
}



const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: () => dispatch(fetchQuestionAPI()),
        // selectedQuery: state.searchInput.selectedQuery
        clickHandler: (isCorrect) => dispatch(score(isCorrect))
    };
}


export default connect(
    mapStateToProps, mapDispatchToProps
    )(Questions);