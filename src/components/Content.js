import React from "react";
import QuestionContainer from "../containers/QuestionContainer";
import PointsContainer from "../containers/PointsContainer";
import MenuContainer from "../containers/MenuContainer";
import ScoreboardContainer from "../containers/ScoreboardContainer";

function Content({ view }) {
  return (
    <div>
      {view === "menu" && <MenuContainer />}
      {view === "quiz" && (
        <React.Fragment>
          <QuestionContainer /> <PointsContainer />
        </React.Fragment>
      )}
      {view === "scoreboard" && <ScoreboardContainer />}
    </div>
  );
}

export default Content;
