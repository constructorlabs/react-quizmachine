import { connect } from "react-redux";
import Question from "../components/Question";
import { fetchQuestionFromAPI } from "../actions";

const mapStateToProps = reduxState => {
  console.log("Step 6 - calling mapStateToProps in QuestionContainer", reduxState["question"])
  return {
    question: reduxState.question["0"]
  };
};



const mapDispatchToProps = dispatch => {
  console.log("Step 2: getting action creator");
  return {
    fetchQuestion: () => dispatch(fetchQuestionFromAPI())
    // handleClick: () => {
    //   dispatch(fetchQuestionFromAPI())
    //   fetchQuestion:()=>dispatch(fetchQuestionFromAPI())
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);