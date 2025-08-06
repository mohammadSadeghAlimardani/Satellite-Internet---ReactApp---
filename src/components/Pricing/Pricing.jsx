import "./Pricing.css";
import SinglePlan from "./SinglePlan";
import plans from "./data";

const Pricing = () => {
    return (
        <div className="pricing" id="pricing">
            <div className="section-center pricing-center">
                <h2 className="pricing-title">flexible plans for everyone</h2>
                <p className="pricing-description">
                    choose the plan that best suits your needs and enjoy
                    seamless connectivity
                </p>
                <div className="pricing-plans column column-3">
                    {plans.map((singlePlan) => {
                        return (
                            <SinglePlan key={singlePlan.id} {...singlePlan} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
