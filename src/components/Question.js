import React from 'react';

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
            <div>
                {
                    quizQuestion
                        ? quizQuestion.results.map(result => {
                            return <p key={result.question}>
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
