import datas from "../Data/data.json";
import BtnTheme from "./BtnTheme";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <div className="quiz">
      <BtnTheme />
      <div className="quizContent">
        <div className="quizContentParagraph">
          <h1 className="quizContentParagraphTitle">
            Welcome to the
            <span className="quizContentParagraphTitleSpan"> Fronted Quiz!</span>
          </h1>
          <p className="quizContentParagraphText">Pick a subject to get started.</p>
        </div>
        <div className="quizChoise">
          {datas.quizzes.map((data, index) => {
            return <Link to={"/Question"} className="quizChoiseContent" key={index}>
              <div className={`quizChoiseContentIcon color-${index}`}>
                <img src={data.icon} alt={data.alt} className="quizChoiseIcon" />
              </div>
              <h2 className="quizChoiseContentTitle">
                {data.title}
              </h2>
            </Link>
          })}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
