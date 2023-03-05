import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import CostOfRenovation from './pages/01_home/01_costOfRenovation/CostOfRenovation';
import Home from "./pages/01_home/Home"
import Services from "./pages/02_services/Services"
import Projects from "./pages/03_projects/Projects"
import OurTeam from "./pages/04_ourTeam/OurTeam"
import CostCalculator from "./pages/05_costCalculator/CostCalculator"
import Contact from "./pages/06_contact/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/costCalculator" element={<CostCalculator/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
