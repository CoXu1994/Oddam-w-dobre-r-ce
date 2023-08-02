import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeAboutUs from "./HomeAboutUs";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeMainSection from "./HomeMainSection";
import Navigation from "./Navigation";
import HomeContact from "./HomeContact";

function Home() {
    return (
        <div className="container">
            <Navigation />
            <HomeMainSection />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
        </div>
    )
}

export default Home;