import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import MissionTask from "./components/pages/MissionTask";
import Application from "./components/pages/Application";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mission-Task" element={<MissionTask />} />
        <Route path="/Application" element={<Application />} />
      </Routes>
    </div>
  );
}

export default App;
