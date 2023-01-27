import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import MissionTask from "./components/pages/MissionTask";
import Rentals from "./components/pages/Rentals";
import ApplicationPersonal from "./components/pages/ApplicationPages/ApplicationPersonal";
import ApplicationLandlord from "./components/pages/ApplicationPages/ApplicationLandlord";
import ApplicationPrivacy from "./components/pages/ApplicationPages/ApplicationPrivacy";
import ApplicationSubmission from "./components/pages/ApplicationPages/ApplicationSubmission";
import PropertyManagement from "./components/pages/PropertyManagement";
// paths

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mission-Task" element={<MissionTask />} />
        <Route path="/Rentals" element={<Rentals />} />
        <Route
          path="/Application-Personal-Details"
          element={<ApplicationPersonal />}
        />
        <Route
          path="/Application-Landlord-Details"
          element={<ApplicationLandlord />}
        />
        <Route
          path="/Application-Privacy-Statements"
          element={<ApplicationPrivacy />}
        />
        <Route
          path="/Application-Submission-Confirmation"
          element={<ApplicationSubmission />}
        />
        <Route path="/Property-Management" element={<PropertyManagement />} />
      </Routes>
    </div>
  );
}

export default App;
