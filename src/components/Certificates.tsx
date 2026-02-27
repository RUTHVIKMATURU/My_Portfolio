import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle2 } from 'lucide-react';
import { useState, useMemo } from 'react';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [filter, setFilter] = useState('All');

  const certificates = [
    {
      name: 'MERN Stack Development',
      organization: 'VNRVJIET',
      date: '2024',
      description: 'Comprehensive certification covering full-stack web development with MongoDB, Express, React, and Node.js. Focused on building scalable architecture and RESTful APIs.',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
      credentialId: 'VNR-MERN-2024-102',
      category: 'Development'
    },
    {
      name: 'Google Cloud Skills Boost',
      organization: 'Google Cloud',
      date: '2024',
      description: 'Domain expertise in cloud computing fundamentals, GCP services, and infrastructure management. Includes hands-on experience with Computing engine and Cloud Storage.',
      skills: ['GCP', 'Cloud Computing', 'IAM', 'Cloud Storage'],
      credentialId: 'GC-BOOST-2024-SRV',
      image: '/certificates/GoogleCloud.png',
      category: 'Cloud'
    },
    {
      name: '1st Place - Smart Interviews',
      organization: 'VNRVJIET',
      date: '2024',
      description: 'Technical excellence award as the top performer in a comprehensive competitive programming and problem-solving challenge among 500+ participants.',
      skills: ['Data Structures', 'Algorithms', 'Competitive Programming'],
      credentialId: 'SI-TOP-2024-VNR',
      image: '/certificates/smartInterviews.png',
      category: 'Competition'
    },
    {
      name: '27th Rank - Top 100 Coders 2k24',
      organization: 'Krithomedh',
      date: '2024',
      description: 'Ranked in the top percentiles in a high-stakes college-level coding competition focusing on problem-solving speed and accuracy.',
      skills: ['Algorithms', 'Java', 'Problem Solving'],
      credentialId: 'KR-T100-2024',
      category: 'Competition'
    },
    {
      name: '11th Rank - Top 100 Coders 2k25',
      organization: 'Krithomedh',
      date: '2025',
      description: 'Recognized for algorithm mastery and speed in a competitive field of elite college-level programmers. Improved rank from previous year.',
      skills: ['DSA', 'Optimization', 'Python'],
      credentialId: 'KR-T100-2025',
      category: 'Competition'
    },
    {
      name: '12th Rank - Turing Cup 2k25',
      organization: 'Inter College Competition',
      date: '2025',
      description: 'Competitive performance in a prestigious inter-college programming contest featuring advanced DSA challenges and teamwork.',
      skills: ['Advanced DSA', 'Team Coordination', 'Optimization'],
      credentialId: 'TC-2K25-VNR',
      image: '/certificates/TuringCup2k25.png',
      category: 'Competition'
    },
    {
      name: '2nd Rank - Codeverse 2k25',
      organization: 'Turing Hut',
      date: '2025',
      description: 'Secured a top-tier podium finish in a rigorous multi-stage coding competition organized by Turing Hut.',
      skills: ['Programming', 'Logic', 'Databases'],
      credentialId: 'TH-CV-2025-02',
      image: '/certificates/Codeverse.jpg',
      category: 'Competition'
    },
    {
      name: '7th Rank - Coding Contest 2k25',
      organization: 'Turing Hut',
      date: '2025',
      description: 'Distinguished performance in an inter-college level competitive programming event with a focus on graph theory and dynamic programming.',
      skills: ['Graph Theory', 'Dynamic Programming', 'Logical Reasoning'],
      credentialId: 'TH-CC-2025-07',
      category: 'Competition'
    }
  ];

  const organizations = ['All', ...Array.from(new Set(certificates.map(c => c.organization)))];

  const filteredCertificates = useMemo(() => {
    return filter === 'All'
      ? certificates
      : certificates.filter(c => c.organization === filter);
  }, [filter, certificates]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="certificates" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-4">
            <CheckCircle2 size={12} />
            Verified Achievements
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gradient glow-text mb-4 uppercase tracking-tighter">
            Earning Recognition
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8"></div>

          {/* Org Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {organizations.map((org) => (
              <button
                key={org}
                onClick={() => setFilter(org)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${filter === org
                  ? 'bg-cyan-400 text-black border-cyan-400'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-cyan-400/50 hover:text-cyan-400'
                  }`}
              >
                {org}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredCertificates.map((cert, index) => (
            <CertificateCard
              key={cert.name}
              cert={cert}
              index={index}
              onClick={() => setSelectedCertificate(cert)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedCertificate && (
            <CertificateModal
              cert={selectedCertificate}
              onClose={() => setSelectedCertificate(null)}
            />
          )}
        </AnimatePresence>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="relative glass-effect rounded-3xl p-1 overflow-hidden group">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-20 group-hover:opacity-100 animate-gradient-x transition-opacity duration-700" />

            <div className="relative bg-black/90 rounded-[22px] p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-black uppercase tracking-widest mb-6">
                <Award size={14} />
                Leadership Role
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Technical Head <br className="hidden md:block" />
                <span className="text-gradient">ISTE VNRVJIET</span>
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
                Demonstrated strong organizational and technical support skills by co-organizing workshops
                on <span className="text-white">Web Development</span>, <span className="text-white">AI</span>, and <span className="text-white">Git/GitHub</span>,
                ensuring seamless event execution and effective participant guidance.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Mentorship</span>
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Event Execution</span>
                <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Team Direction</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
