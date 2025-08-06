import "./FAQ.css";
import { nanoid } from "nanoid";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";

const FAQ = () => {
    return (
        <div className="FAQ" id="FAQ">
            <div className="section-center FAQ-center">
                <h2 className="FAQ-title">frequently asked questions</h2>
                <div className="questions">
                    {questions.map((singleQuestion) => {
                        return (
                            <SingleQuestion
                                key={nanoid()}
                                {...singleQuestion}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
