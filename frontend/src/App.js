import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MissionTask from "./pages/MissionTask";
import Rentals from "./pages/Rentals";
import ApplicationPersonal from "./pages/ApplicationPages/ApplicationPersonal";
import ApplicationLandlord from "./pages/ApplicationPages/ApplicationLandlord";
import ApplicationPrivacy from "./pages/ApplicationPages/ApplicationPrivacy";
import ApplicationSubmission from "./pages/ApplicationPages/ApplicationSubmission";
import PropertyManagement from "./pages/PropertyManagement";
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
