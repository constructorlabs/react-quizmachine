import { connect } from "react-redux";
import Score from  "../components/Score";
import { score } from '../actions';

const mapStateToProps = state => {
    return {
        score: state.score

           //name of prop being passed down(object)  : state:(importedreducercomponent).(key of object)
    };
}




export default connect(
    mapStateToProps
    )(Score);