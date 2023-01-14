import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import MissionTask from "./components/pages/MissionTask";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mission-Task" element={<MissionTask />} />
      </Routes>
    </div>
  );
}

export default App;
