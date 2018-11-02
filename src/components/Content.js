import React from "react";
import QuestionContainer from "../containers/QuestionContainer";
import PointsContainer from "../containers/PointsContainer";
import MenuContainer from "../containers/MenuContainer";

function Content({ view }) {
  return (
    <div>
      {view === "menu" && <MenuContainer />}
      {view === "quiz" && (
        <React.Fragment>
          <QuestionContainer /> <PointsContainer />
        </React.Fragment>
      )}
    </div>
  );
}

export default Content;
