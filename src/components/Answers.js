import React from 'react';
import { Redirect } from 'react-router-dom';
import ButtonAnswer from './ButtonAnswer';
import '../static/styles/answers.scss';

class Answers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answers: {},
            shuffled_answers: [],
            redirect: false
        }
        this.verifyAnswer = this.verifyAnswer.bind(this);
        this.endOfQuestions = this.endOfQuestions.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ answers: nextProps.answers });
        const question_answers = nextProps.answers.results
            ? [...nextProps.answers.results[0].incorrect_answers, nextProps.answers.results[0].correct_answer]
            : [];

        //If they are new answers generate random array
        if (nextProps.answers !== this.state.answers) {
            this.props.generateArray(this.props.randomArray.sort(() => 0.5 - Math.random()));
        }

        // Generate array with suffled questions  
        const suffled = [];
        this.props.randomArray.map(position => {
            suffled.push(question_answers[position]);
        })
        this.setState({
            shuffled_answers: suffled
        })
    }

    verifyAnswer(e, answer) {
        e.preventDefault();

        if (answer === this.state.answers.results[0].correct_answer) {
            this.props.isRightAnswer(true);
            this.props.scoreUpdate(this.props.score + 10);
            this.props.viewMessage(true);

            setTimeout(() => {
                this.props.isRightAnswer(false);
            }, 3000)

            if (this.props.currentQuestion === +this.props.totalQuestions) return;

            setTimeout(() => {
                this.props.requestQuestion(this.props.category, this.props.difficulty);
            }, 3000)

            this.props.incrementCurrentQuestion(this.props.currentQuestion + 1);
        } else {
            this.props.isRightAnswer(false);
            this.props.scoreUpdate(this.props.score - 10);
            this.props.viewMessage(true);


            if (this.props.currentQuestion === +this.props.totalQuestions) { return };
            setTimeout(() => {
                this.props.requestQuestion(this.props.category, this.props.difficulty);
            }, 1000)
            this.props.incrementCurrentQuestion(this.props.currentQuestion + 1);
        }
    }

    endOfQuestions() {
        if (this.props.currentQuestion === +this.props.totalQuestions) {
            setTimeout(() => {
                this.setRedirect();
            }, 2000)
        } else {
            setTimeout(() => {
                this.props.isRightAnswer(false);
            }, 2000)
        }
    }

    setRedirect() {
        this.setState({
            redirect: true
        });
    }
    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/leaderboard" />;
        }
    }

    render() {
        return (
            <div className="answers" >
                {this.renderRedirect()}
                {
                    this.state.shuffled_answers.map(answer => {
                        return <ButtonAnswer
                            key={answer}
                            answer={answer}
                            isRight={answer === this.state.answers.results[0].correct_answer}
                            verifyAnswer={this.verifyAnswer}
                            endOfQuestions={this.endOfQuestions}

                        />
                    })
                }
            </div>
        )
    }
}

export default Answers;