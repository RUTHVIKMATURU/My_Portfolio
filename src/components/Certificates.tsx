import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck } from 'lucide-react';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';
import ExperienceConsole from './ExperienceConsole';
import { VERIFIED_CERTIFICATIONS, Certificate } from '../data/portfolioData';

const categories = ['All', 'Algorithms', 'Cloud', 'Development'] as const;

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCerts = useMemo(() => {
    if (activeCategory === 'All') return VERIFIED_CERTIFICATIONS;
    return VERIFIED_CERTIFICATIONS.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <ShieldCheck size={13} />
            VERIFIED INDUSTRY CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Recognitions &{' '}
            <span className="text-gradient-cyan">certifications.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Audited certifications across Cloud Architecture, Advanced Data Structures, and Enterprise Web Development.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors border ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold'
                    : 'bg-white/[0.03] text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredCerts.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>

        {/* Experience Console (Mentorship & Workshop Metrics) */}
        <ExperienceConsole />
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
