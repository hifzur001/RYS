import { AboutSection } from "./components/About/about-section";
import { ApplicationProcess } from "./components/Application/application-process";
import BlogSection from "./components/Blog/blog-section";
import { ExploreServices } from "./components/Explore/explore-services";
import FrequentlyAskedQuestions from "./components/FAQ/frequently-asked-questions";
import FeaturesSection from "./components/Feature/features-section";
import FooterSection from "./components/Footer/footer-section";
import { HappyClients } from "./components/Happy/happy-clients";
import Hero from "./components/Hero/Hero";
import MobileApp from "./components/Mobile/mobile-app";
import Navbar from "./components/Navbar/Navbar";
import PartnersSection from "./components/Partner/partners-section";
import StatsSection from "./components/Stats/stats-section";
import Testimonials from "./components/Testimonials/testimonials";
import { TrustedBy } from "./components/Trusted/trusted-by";
import { VideoIntroductions } from "./components/Video/video-introductions";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <TrustedBy />
            <ExploreServices />
            <AboutSection />
            <FeaturesSection />
            <VideoIntroductions />
            <HappyClients />
            <ApplicationProcess />
            <BlogSection />
            <Testimonials />
            <FrequentlyAskedQuestions />
            <MobileApp />
            <StatsSection />
            <PartnersSection />
            <FooterSection />
        </main>
    );
};

export default App;
