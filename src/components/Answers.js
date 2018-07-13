import React from 'react';

class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.createQuestionMarkup = this.createQuestionMarkup.bind(this);
    }

    // componentDidMount() {
    //     this.props.requestQuestion();
    // }

    createQuestionMarkup(question) {
        return { __html: question };
    };

    render() {
        const { answers } = this.props;
        const question_answers = answers
            ? [...answers.results[0].incorrect_answers, answers.results[0].correct_answer]
            : [];

        const shuffled_questions = question_answers.sort(() => 0.5 - Math.random());

        return (
            <div>
                {shuffled_questions.map(answer => {
                    return <button key={answer} dangerouslySetInnerHTML={this.createQuestionMarkup(answer)} />
                })}
            </div>
        )
    }
}

export default Answers;
