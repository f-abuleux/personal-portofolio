import './app.css'
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import WorkArt from './Pages/WorkArts';


export default function App() {
  const test = "3dworkart"

  return (
    <div className="font-[HelveticaNeueCyr]" id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={`/web/${test}`} element={<WorkArt/>} />
        </Routes>
      </Router>
    </div>
  )
}