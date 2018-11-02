function Question() {
  return (
    <div className="grid">
      <div className="center">
        <p className="score">Score: {this.props.score}</p>
        <Difficulty className="difficulty-button" />
        <Category className="difficulty-button" />
        <QuestionMap />
      </div>
    </div>
  );
}

export default Question;
