import PropTypes from "prop-types";
import { FeedbackList } from "./Feedback.styled";

export const FeedbackOptions = ({feedback}) => {
    return (
        <FeedbackList>
        <li className="feedback-item"><button className="feedback-button" onClick={feedback} data-feedback-name='good' type="button">Good</button></li>
        <li className="feedback-item"><button className="feedback-button" onClick={feedback} data-feedback-name='neutral' type="button">Neutral</button></li>
        <li className="feedback-item"><button className="feedback-button" onClick={feedback} data-feedback-name='bad' type="button">Bad</button></li>
      </FeedbackList>
    )
}

FeedbackOptions.propTypes = {
    feedback: PropTypes.func.isRequired,
}