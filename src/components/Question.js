import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.createQuestionMarkup = this.createQuestionMarkup.bind(this);
    }

    componentDidMount() {
        this.props.requestQuestion();
    }

    createQuestionMarkup(question) {
        return { __html: question };
    };

    render() {
        const { quizQuestion } = this.props;
        return (
            <div>
                {quizQuestion
                    ? quizQuestion.results.map(result => {
                        // 
                        return <p key={result.question} dangerouslySetInnerHTML={this.createQuestionMarkup(result.question)} />
                    })
                    : ""

                }
            </div>
        )
    }
}

export default Question;
