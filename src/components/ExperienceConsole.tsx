import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { CheckCircle2, Code2, Network, GitBranch, Terminal, X } from 'lucide-react';
import CountUp from './CountUp';

const ExperienceConsole = () => {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const tags = ['Mentorship', 'Event Execution', 'Team Direction'];
  
  const panelDescriptions = [
    { title: "MERN Stack", text: "Guided participants through building full-stack applications with MongoDB, Express, React, and Node.js. Ensured seamless event execution and provided hands-on technical support during live coding sessions." },
    { title: "AI & ML", text: "Demonstrated strong organizational skills by coordinating advanced AI & ML sessions. Facilitated deep dives into machine learning models and provided effective participant guidance throughout." },
    { title: "Version Control", text: "Led interactive workshops on Git and GitHub workflows. Helped students understand branching, merging, and collaborative version control practices in real-world team development scenarios." }
  ];

  return (
    <>
      <AnimatePresence>
        {activePanel !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePanel(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              layoutId={`exp-panel-${activePanel}`}
              className="relative w-full max-w-lg glass-effect rounded-[2rem] p-8 md:p-10 shadow-2xl border border-cyan-400/30 text-center"
            >
              <button
                onClick={() => setActivePanel(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/50 hover:text-white"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {panelDescriptions[activePanel].title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {panelDescriptions[activePanel].text}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-24 max-w-5xl mx-auto perspective-1000"
    >
      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        glareEnable={false}
        className="transform-style-3d"
      >
        <div
          onMouseMove={handleMouseMove}
          className="relative glass-effect rounded-[2rem] p-1 overflow-hidden group border border-cyan-400/20"
        >
          {/* Dynamic Energy Field Border & Glow */}
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
            style={{
              background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(34, 211, 238, 0.2), transparent 80%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-cyan-400/10 opacity-30 group-hover:opacity-100 animate-gradient-x transition-opacity duration-700 z-0" />

          {/* Inner Content Wrapper */}
          <div className="relative z-10 bg-black/80 backdrop-blur-2xl rounded-[1.8rem] p-6 md:p-10 transform-style-3d">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6 translate-z-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <CheckCircle2 size={14} className="animate-pulse text-cyan-400" />
                  Leadership Role
                </div>
                
                {/* Data-stream background for title */}
                <div className="relative p-4 rounded-xl overflow-hidden border border-white/5 bg-gradient-to-r from-white/5 to-transparent">
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] mix-blend-overlay"></div>
                  <h3 className="relative z-10 text-3xl md:text-5xl font-black text-white leading-tight">
                    Technical Head <br />
                    <span className="text-gradient glow-text">ISTE VNRVJIET</span>
                  </h3>
                </div>
              </div>

              {/* Quantifiable Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 bg-white/5 p-4 rounded-2xl border border-white/10 w-full md:w-auto">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white mb-1"><CountUp value={500} />+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Mentored</p>
                </div>
                <div className="text-center border-x border-white/10 px-4 md:px-8">
                  <p className="text-3xl font-bold text-cyan-400 mb-1"><CountUp value={12} />+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Workshops</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400 mb-1"><CountUp value={35} />+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Projects</p>
                </div>
              </div>
            </div>

            {/* Interactive Showcase Panels */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              
              {/* Panel 1: Web Dev */}
              <motion.div 
                layoutId="exp-panel-0"
                onClick={() => setActivePanel(0)}
                className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px] hover:border-cyan-400/40 transition-colors translate-z-20 group/panel cursor-pointer"
              >
                <div className="p-3 bg-cyan-400/10 rounded-xl mb-3 group-hover/panel:scale-110 transition-transform">
                  <Code2 size={24} className="text-cyan-400" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wider">MERN Stack</span>
              </motion.div>

              {/* Panel 2: AI Fundamentals */}
              <motion.div 
                layoutId="exp-panel-1"
                onClick={() => setActivePanel(1)}
                className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px] hover:border-purple-400/40 transition-colors translate-z-20 group/panel cursor-pointer"
              >
                <div className="p-3 bg-purple-400/10 rounded-xl mb-3 group-hover/panel:scale-110 transition-transform">
                  <Network size={24} className="text-purple-400" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wider">AI & ML</span>
              </motion.div>

              {/* Panel 3: Git Mastery */}
              <motion.div 
                layoutId="exp-panel-2"
                onClick={() => setActivePanel(2)}
                className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px] hover:border-orange-400/40 transition-colors translate-z-20 group/panel cursor-pointer"
              >
                <div className="p-3 bg-orange-400/10 rounded-xl mb-3 group-hover/panel:scale-110 transition-transform">
                  <GitBranch size={24} className="text-orange-400" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wider">Version Control</span>
              </motion.div>
            </div>

            {/* Floating Tags */}
            <div className="relative h-12 w-full translate-z-30 overflow-visible">
              {tags.map((tag, i) => (
                <motion.div
                  key={tag}
                  animate={{
                    y: [0, -8, 0],
                    x: [0, i % 2 === 0 ? 5 : -5, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-widest backdrop-blur-md whitespace-nowrap
                    ${i === 0 ? 'left-[10%] bottom-0' : i === 1 ? 'left-[40%] bottom-4' : 'right-[10%] bottom-1'}`}
                >
                  {tag}
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </Tilt>
    </motion.div>
    </>
  );
};

export default ExperienceConsole;
