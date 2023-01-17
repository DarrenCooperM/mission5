import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import MissionTask from "./components/pages/MissionTask";
import Application from "./components/pages/Application";
import ApplicationPageTwo from "./components/pages/ApplicationPageTwo";
import ApplicationPageThree from "./components/pages/ApplicationPageThree";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mission-Task" element={<MissionTask />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Application-page-two" element={<ApplicationPageTwo />} />
        <Route
          path="/Application-page-three"
          element={<ApplicationPageThree />}
        />
      </Routes>
    </div>
  );
}

export default App;
