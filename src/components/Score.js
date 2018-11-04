import React from "react";

class Questions extends React.Component {

    constructor() {
        super();
        // this.mixQuestions = this.mixQuestions.bind(this);
    }


  

    render() {

  return (
    <div className="score">
     <div>
         <h2>{this.props.score}</h2>
         
     </div>
    </div>
  );
}
}

    

export default Questions;
