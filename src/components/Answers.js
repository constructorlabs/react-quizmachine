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

    // componentDidMount() {
    // console.log("this.props", this.props)
    // const question_answers = this.state.answers.results
    //     ? [...this.state.answers.results[0].incorrect_answers, this.state.answers.results[0].correct_answer]
    //     : [];

    // this.setState({
    //     shuffled_answers: question_answers.sort(() => 0.5 - Math.random())
    // })

    // }

    componentWillReceiveProps(nextProps) {
        this.setState({ answers: nextProps.answers });
        const question_answers = nextProps.answers.results
            ? [...nextProps.answers.results[0].incorrect_answers, nextProps.answers.results[0].correct_answer]
            : [];

        this.setState({
            shuffled_answers: question_answers.sort(() => 0.5 - Math.random())
        })
    }

    verifyAnswer(e, answer) {
        e.preventDefault();

        if (answer === this.state.answers.results[0].correct_answer) {
            this.props.isRightAnswer(true);
            // e.target.classList.add('animated', 'pulse', 'answers__button--correct-answer');
            this.props.scoreUpdate(this.props.score + 10);
            this.props.viewMessage(true);
            setTimeout(() => {
                this.props.isRightAnswer(false);
            }, 3000)
            this.props.requestQuestion(this.props.category, this.props.difficulty);
            if (this.props.currentQuestion === +this.props.totalQuestions) return;
            this.props.incrementCurrentQuestion(this.props.currentQuestion + 1);
        } else {
            // e.target.classList.add('animated', 'shake', 'answers__button--wrong-answer');
            this.props.isRightAnswer(false);
            this.props.scoreUpdate(this.props.score - 10);


            // e.target.setAttribute("disabled", "disabled");
            this.props.viewMessage(true);

            setTimeout(() => {
                this.props.requestQuestion(this.props.category, this.props.difficulty);
            }, 3000)
            if (this.props.currentQuestion === +this.props.totalQuestions) { this.props.isRightAnswer(true); return };
            this.props.incrementCurrentQuestion(this.props.currentQuestion + 1);
        }
    }

    endOfQuestions() {
        // console.log("currentQuestion", currentQuestion);
        // console.log("totalQuestions", totalQuestions);
        if (this.props.currentQuestion === +this.props.totalQuestions) {
            // Open end game message
            console.log('game ends');

            setTimeout(() => {
                this.setRedirect();
            }, 2000)
        } else {
            setTimeout(() => {
                // requestQuestion(category, difficulty);
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
            return <Redirect to="/hall-of-fame" />;
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


                /* return <button
                    type="button"
                    onClick={(e) => {
                        verifyAnswer(e, answer);
                        endOfQuestions();
                    }}
                    key={answer}
                    className={cx('answers__button', {
                        "answers__button--disabled": false
                    })}>
                    {decodeURIComponent(answer)}
                </button> */