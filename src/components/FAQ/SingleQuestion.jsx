import { useState } from "react";
import "./SingleQuestion.css";
import { FaChevronUp } from "react-icons/fa";

const SingleQuestion = (props) => {
    const { questionText, answerText } = props;
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <article className="single-question">
            <header>
                <h3>{questionText}</h3>
                <FaChevronUp
                    onClick={() => setShowAnswer(!showAnswer)}
                    style={{ transform: showAnswer ? `rotate(180deg)` : "" }}
                />
            </header>
            <p>{showAnswer ? answerText : ""}</p>
        </article>
    );
};

export default SingleQuestion;
