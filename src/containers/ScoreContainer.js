import { connect } from "react-redux";
import Score from  "../components/Score";
import { scoreFetch } from '../actions';

// scoreFetch={this.props.scoreFetch}

const mapStateToProps = state => {
    return {
        score: state.scoreFetch.score

           //name of prop being passed down(object)  : state:(importedreducercomponent).(key of object)
    };
}



export default connect(
    mapStateToProps
    )(Score);