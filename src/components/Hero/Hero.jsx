import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <section className="hero-center">
                <h2>high speed internet</h2>
                <h2>anywhere on earth</h2>
                <p>
                    NovaLink Delivers blazing-fast, low-latency setellite
                    internet to even the most remote corners of the pkanet
                </p>
                <div>
                    <button className="btn btn-primary">
                        check availability
                    </button>
                    <button className="btn btn-secondary">
                        see how it works
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Hero;
