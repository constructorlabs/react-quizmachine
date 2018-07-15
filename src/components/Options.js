import React from 'react';
import cx from 'classnames';
import "../static/styles/options.scss";

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            categoryName: '',
            difficulty: '',
            optionsOpen: false
        }

        this.updateCategory = this.updateCategory.bind(this);
        this.updateDifficulty = this.updateDifficulty.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.updateDifficulty = this.updateDifficulty.bind(this);
    }

    updateCategory(e) {
        this.setState({
            category: e.target.value,
            categoryName: e.target.selectedOptions[0].text // get text of the option tag not the value
        });
    }

    updateDifficulty(e) {
        this.setState({
            difficulty: e.target.value
        });
    }

    updateReduxCategory() {
        this.props.optionsCategory(this.state.category);
        this.props.optionsCategoryName(this.state.categoryName);
    }

    updateReduxDifficulty() {
        this.props.optionsDifficulty(this.state.difficulty);
    }

    toggleOptions() {
        this.setState({
            optionsOpen: !this.state.optionsOpen
        })
    }

    render() {
        const CSSClasses = cx('options__list ', {
            visible: this.state.optionsOpen
        });
        return (
            <div className="options">
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
                    <button
                        className="options__button-update"
                        onClick={(e) => {
                            this.props.requestQuestionsUpdate(this.state.category, this.state.difficulty);
                            this.toggleOptions();
                            this.updateReduxCategory(e);
                            this.updateReduxDifficulty(e);
                        }}>
                        Update
                    </button>
                </div>
            </div >
        );
    };
}
export default Options;
