import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import Workflow from "./components/Workflow/Workflow";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Workflow />
            <Pricing />
            <FAQ />
            <Footer />
        </main>
    );
};

export default App;
