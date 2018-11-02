import { connect } from "react-redux";
import Questions from  "../components/Questions";
// import { setQuery, submitQuery } from "../actions"
import { fetchQuestionAPI } from '../actions';

// fetchQuestion={this.props.fetchQuestion}

const mapStateToProps = state => {
    return {
        // selectedQuery: state.searchInput.selectedQuery
    };
}


const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion: () => dispatch(fetchQuestionAPI())
        // selectedQuery: state.searchInput.selectedQuery
    };
}


export default connect(
    mapStateToProps, mapDispatchToProps
    )(Questions);