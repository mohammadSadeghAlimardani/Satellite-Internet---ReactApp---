import { FaCircle } from "react-icons/fa";
import "./SingleStep.css";

const SingleStep = (props) => {
    const { id, title, description, icon } = props;
    return (
        <article
            style={{
                flexDirection: id % 2 === 0 ? "row-reverse" : "",
            }}
            className="single-step"
        >
            <div
                className="step-info"
                style={{ textAlign: id % 2 === 0 ? "left" : "right" }}
            >
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="step-point">
                <FaCircle />
            </div>
            <div
                className="step-icon"
                style={{ textAlign: id % 2 === 0 ? "right" : "left" }}
            >
                {icon}
            </div>
        </article>
    );
};

export default SingleStep;
