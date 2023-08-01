import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeAboutUs from "./HomeAboutUs";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeThreeColumns from "./HomeThreeColumns";
import Navigation from "./Navigation";
import HomeContact from "./HomeContact";

function Home() {
    return (
        <>
            <Navigation />
            <HomeMainSection />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
        </>
    )
}

export default Home;