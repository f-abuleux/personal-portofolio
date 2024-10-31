import AboutMe from "../components/aboutme";
import DetailsProps from "../components/detailsprops";
import KnowsMeBetter from "../components/knowsmebetter";
import RecentPortofolio from "../components/myrecent-portofolio";

export default function Home() {
    return (
        <div id="home">
            <AboutMe />
            <RecentPortofolio />
            <DetailsProps />
            <KnowsMeBetter />
        </div>
    )
}