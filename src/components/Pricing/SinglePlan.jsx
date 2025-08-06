import "./SinglePlan.css";
import { nanoid } from "nanoid";

const SinglePlan = (props) => {
    const { level, price, suitablePurpose, features } = props;
    return (
        <article className="single-plan">
            <h3>{level}</h3>
            <h2>${price}</h2>
            <h4>for {suitablePurpose}</h4>
            <button className="btn btn-secondary">select</button>
            <div className="horizontal-border"></div>
            <ul>
                {features.map((feature) => {
                    return <li key={nanoid()}>{feature}</li>;
                })}
            </ul>
        </article>
    );
};

export default SinglePlan;
