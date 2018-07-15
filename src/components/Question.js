import React from 'react';
import "../static/styles/question.scss";

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestQuestion();
    }

    render() {
        const { quizQuestion, currentQuestion } = this.props;
        return (
            <div className="question">
                {
                    quizQuestion
                        ? <p className="question__text"
                            key={quizQuestion.results[0].question}>
                            {decodeURIComponent(quizQuestion.results[0].question)}
                        </p>
                        : ""

                }
            </div>
        );
    };
}
export default Question;
