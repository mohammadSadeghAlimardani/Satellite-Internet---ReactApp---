import SingleStep from "./SingleStep";
import "./Workflow.css";
import workSteps from "./data";

const Workflow = () => {
    return (
        <div className="workflow" id="workflow">
            <section className="section-center workflow-center">
                <h2 className="workflow-title">How it works?</h2>
                <div className="work-steps">
                    {workSteps.map((singleStep) => {
                        return (
                            <SingleStep key={singleStep.id} {...singleStep} />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Workflow;
