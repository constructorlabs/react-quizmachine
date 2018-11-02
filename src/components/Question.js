function Question() {
  return (
    <div className="grid">
      <div className="center">
        <Difficulty className="difficulty-button" />
        <Category className="difficulty-button" />
        <QuestionMap />
      </div>
    </div>
  );
}

export default Question;
