import Banner from "./components/Banner/Banner";
import Experience from "./components/Experience/Experience";
import Expertise from "./components/Expertise/Expertise";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";

const App = () => {
    return (
        <main>
            <Navbar />
            <Banner />
            <Expertise />
            <Works />
            <Experience />
            <Testimonials />
            <FAQ />
            <Footer />
        </main>
    );
};

export default App;
