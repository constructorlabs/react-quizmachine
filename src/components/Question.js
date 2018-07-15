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
        const { quizQuestion } = this.props;
        return (
            <div className="question">
                {
                    quizQuestion
                        ? quizQuestion.results.map(result => {
                            return <p className="question__text"
                                key={result.question}>
                                {decodeURIComponent(result.question)}
                            </p>

                        })
                        : ""

                }
            </div>
        );
    };
}
export default Question;
