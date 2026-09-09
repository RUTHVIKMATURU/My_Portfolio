import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Projects from './components/Projects';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import CodingProfiles from './components/CodingProfiles';
import Certificates from './components/Certificates';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation Header */}
      <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onResumeClick={() => setIsResumeModalOpen(true)} />

        {/* Why Me / Proven Capabilities */}
        <ValueProposition />

        {/* Featured Projects & Case Studies */}
        <Projects />

        {/* Technical Depth & Academic Foundation */}
        <About />

        {/* Career & Leadership Journey */}
        <WorkExperience />

        {/* Verified Proof of Work & Algorithmic Pedigree */}
        <CodingProfiles />

        {/* Verified Industry Certifications & Leadership */}
        <Certificates />

        {/* Beyond the Resume: Engineering Philosophy & Curiosity */}
        <EngineeringPhilosophy />

        {/* Closing Recruiter Action: Contact */}
        <Contact onResumeClick={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer onResumeClick={() => setIsResumeModalOpen(true)} />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
