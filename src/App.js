import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import CostOfRenovation from './pages/01_home/01_costOfRenovation/CostOfRenovation';
import Home from "./pages/01_home/Home"
import Services from "./pages/02_services/Services"
import Projects from "./pages/03_projects/Projects"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
