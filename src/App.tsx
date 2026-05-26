import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Certificates />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
