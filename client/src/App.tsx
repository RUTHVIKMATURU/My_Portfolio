import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminMessages from './pages/AdminMessages';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <CodingProfiles />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
