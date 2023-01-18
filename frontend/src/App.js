import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import MissionTask from "./components/pages/MissionTask";
import Rentals from "./components/pages/Rentals";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mission-Task" element={<MissionTask />} />
        <Route path="/Rentals" element={<Rentals />} />
      </Routes>
    </div>
  );
}

export default App;
