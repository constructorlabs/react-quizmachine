import React from "react";

class Questions extends React.Component {

    constructor() {
        super();
        // this.quizDisplay = this.quizDisplay.bind(this);
    }


    componentDidMount(){
        this.props.fetchQuestion()
        }

    render() {

    
  return (
    <div className="quiz__display">
      
    </div>
  );
}

}

export default Questions;
