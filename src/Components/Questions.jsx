import BtnTheme from "./BtnTheme";
import AccessibilityIcon from "../Assets/images/icon-accessibility.svg";
import Btn from "./Btn";

function Questions({ data, index }) {
    return (
        <div className="questions">
            <div className="questionsTop">
                <div className="questionsTopTheme">
                    <div className={`questionsTopThemeIcon`}>
                        <img src={AccessibilityIcon} className="questionsThemeIcon" />
                    </div>
                    <h1 className="questionsTopThemeTitle">
                        Accessibility
                    </h1>
                </div>
                <BtnTheme />
            </div>
            <div className="questionsContent">
                <div className="questionsContentText">
                    <p className="questionsContentTextNumber">
                        Question 2 of 10
                    </p>
                    <h3 className="questionsContentTextQuestion">
                        Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?
                    </h3>
                    <div className="questionsContentTextProgressBar">
                        <span className="progressBarSpan"></span>
                    </div>
                </div>
                <form action="" className="questionsContentForm">
                    <label className="questionsContentFormAnswer">
                        <input type="radio" name="answer" id="answer" className="answer" />
                        <span className="questionsContentFormAnswerSpan">A</span>It automatically validates the fields within a form.
                    </label>
                    <label className="questionsContentFormAnswer">
                        <input type="radio" name="answer" id="answer" className="answer" />
                        <span className="questionsContentFormAnswerSpan">B</span>Hyper Trainer Marking Language
                    </label>
                    <label className="questionsContentFormAnswer">
                        <input type="radio" name="answer" id="answer" className="answer" />
                        <span className="questionsContentFormAnswerSpan">C</span>Hyper Trainer Marking Language
                    </label>
                    <label className="questionsContentFormAnswer">
                        <input type="radio" name="answer" id="answer" className="answer" />
                        <span className="questionsContentFormAnswerSpan">D</span>Hyper Trainer Marking Language
                    </label>
                    <Btn text="Submit Answer" />
                </form>
            </div>
        </div>
    )
}

export default Questions