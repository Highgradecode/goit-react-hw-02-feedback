import PropTypes from "prop-types";
import { FeedbackList } from "./Feedback.styled";

export const FeedbackOptions = ({onLeaveFeedback, options:{good, neutral, bad}}) => {
    return (
        <FeedbackList>
        <li className="feedback-item"><button className="feedback-button" onClick={onLeaveFeedback} data-feedback-name={good} type="button">Good</button></li>
        <li className="feedback-item"><button className="feedback-button" onClick={onLeaveFeedback} data-feedback-name={neutral} type="button">Neutral</button></li>
        <li className="feedback-item"><button className="feedback-button" onClick={onLeaveFeedback} data-feedback-name={bad} type="button">Bad</button></li>
      </FeedbackList>
    )
}

FeedbackOptions.propTypes = {
    feedback: PropTypes.func.isRequired,
}