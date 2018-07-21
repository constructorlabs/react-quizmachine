import React from 'react';
import cx from 'classnames';
import { Redirect } from 'react-router-dom';
import "../static/styles/options.scss";

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            categoryName: '',
            difficulty: '',

            redirect: false,
            // optionsOpen: false,
            questionsAmount: 10
        }

        this.updateCategory = this.updateCategory.bind(this);
        this.updateDifficulty = this.updateDifficulty.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
        // this.toggleOptions = this.toggleOptions.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.updateDifficulty = this.updateDifficulty.bind(this);
        this.updateQuestionsAmount = this.updateQuestionsAmount.bind(this);
    }

    updateCategory(e) {
        this.setState({
            category: e.target.value,
            categoryName: e.target.selectedOptions ? e.target.selectedOptions[0].text : "All", // get text of the option tag not the value
            // questionsAmount: 
        });
    }

    updateDifficulty(e) {
        this.setState({
            difficulty: e.target.value
        });
    }

    updateQuestionsAmount(e) {
        this.setState({
            questionsAmount: e.target.value
        });
    }

    updateReduxCategory() {
        this.props.optionsCategory(this.state.category);
        this.props.optionsCategoryName(this.state.categoryName);
    }

    updateReduxDifficulty() {
        this.props.optionsDifficulty(this.state.difficulty);
        this.setRedirect();
    }

    updateReduxQuestionsAmount() {
        // console.log("this.state.questionsAmount", this.state.questionsAmount)
        this.props.updateReduxQuestionsAmount(this.state.questionsAmount);
    }

    // toggleOptions() {
    //     this.setState({
    //         optionsOpen: !this.state.optionsOpen
    //     })
    // }

    setRedirect() {
        this.setState({
            redirect: true
        });
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/quiz" />;
        }
    }

    render() {
        const CSSClasses = cx('options__list ', {
            visible: this.state.optionsOpen
        });
        return (
            <div className="options">
                {this.renderRedirect()}
                <div className="options__toggle">
                    <button className="options__toggle__button" onClick={this.toggleOptions}>Options</button>
                </div>
                <div className={CSSClasses}>
                    <div className="custom-select">
                        <select name="category" onChange={(e) => this.updateCategory(e)} className="">
                            <option value="">Any Category</option>
                            <option value="9">General Knowledge</option>
                            <option value="10">Books</option>
                            <option value="11">Film</option>
                            <option value="12">Music</option>
                            <option value="13">Musicals &amp; Theatres</option>
                            <option value="14">Television</option>
                            <option value="15">Video Games</option>
                            <option value="16">Board Games</option>
                            <option value="17">Science &amp; Nature</option>
                            <option value="18">Science: Computers</option>
                            <option value="19">Science: Mathematics</option>
                            <option value="20">Mythology</option>
                            <option value="21">Sports</option>
                            <option value="22">Geography</option>
                            <option value="23">History</option>
                            <option value="24">Politics</option>
                            <option value="25">Art</option>
                            <option value="26">Celebrities</option>
                            <option value="27">Animals</option>
                            <option value="28">Vehicles</option>
                            <option value="29">Comics</option>
                            <option value="30">Science: Gadgets</option>
                            <option value="31">Japanese Anime &amp; Manga</option>
                            <option value="32">Cartoon &amp; Animations</option>
                        </select>
                    </div>
                    <div className="custom-select ">
                        <select name="difficulty" onChange={(e) => this.updateDifficulty(e)} className="">
                            <option value="">Any Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="custom-select ">
                        <select defaultValue="Questions amount (10 by default)"
                            name="questions-amount"
                            onChange={(e) => this.updateQuestionsAmount(e)} className="">
                            <option value="Questions amount (10 by default)" disabled>Questions amount (10 by default)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                    <button
                        className="options__button-update"
                        onClick={(e) => {
                            this.props.requestQuestionsUpdate(this.state.category, this.state.difficulty, 1);
                            this.props.currentQuestion(1);
                            this.props.scoreUpdate(0);
                            this.updateReduxCategory(e);
                            this.updateReduxDifficulty(e);
                            this.updateReduxQuestionsAmount(e);
                        }}>
                        Go!
                    </button>
                </div>
            </div>
        );
    };
}
export default Options;
