import AboutMe from "./components/aboutme";
import './app.css'
import RecentPortofolio from "./components/myrecent-portofolio";
import DetailsProps from "./components/detailsprops";
import KnowsMeBetter from "./components/knowsmebetter";


export default function App() {
  return (
    <div className="font-[HelveticaNeueCyr]" id="app">
      <AboutMe />
      <RecentPortofolio />
      <DetailsProps />
      <KnowsMeBetter />
    </div>
  )
}