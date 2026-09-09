import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, GitBranch, X, Users, CheckCircle2 } from 'lucide-react';
import CountUp from './CountUp';

const ExperienceConsole = () => {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const panelDescriptions = [
    {
      title: 'Full-Stack Architecture (MERN)',
      text: 'Guided 500+ student developers through building scalable web applications with MongoDB, Express, React, and Node.js. Facilitated hands-on debugging, REST API design, and asynchronous state management in team coding marathons.',
      icon: Code2,
      accent: 'text-cyan-400',
    },
    {
      title: 'Applied AI & Machine Learning',
      text: 'Directed specialized AI workshops introducing practical model inference, Python computer vision pipelines, and deep-learning concepts. Assisted students in deploying models with low latency and clean API endpoints.',
      icon: Cpu,
      accent: 'text-purple-400',
    },
    {
      title: 'Version Control & Team Workflows',
      text: 'Led interactive masterclasses on professional Git branching models, rebasing, pull-request code reviews, and CI/CD basics to prepare students for real-world production engineering environments.',
      icon: GitBranch,
      accent: 'text-emerald-400',
    },
  ];

  return (
    <>
      <AnimatePresence>
        {activePanel !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePanel(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0b0f17] border border-white/15 rounded-2xl p-7 shadow-2xl z-10"
            >
              <button
                onClick={() => setActivePanel(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
              >
                <X size={18} />
              </button>

              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                {panelDescriptions[activePanel].title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {panelDescriptions[activePanel].text}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-14 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0b0f17]/90 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle gradient banner */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-2">
                <Users size={13} />
                TECHNICAL LEADERSHIP BENCHMARK
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Technical Head @ <span className="text-gradient-cyan">ISTE VNRVJIET</span>
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                Directing technical curricula, mentorship workshops, and student engineering hackathons.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white block">
                  <CountUp value={500} />+
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Mentored
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 block">
                  <CountUp value={12} />+
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Workshops
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 block">
                  <CountUp value={35} />+
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Projects
                </span>
              </div>
            </div>
          </div>

          {/* 3 Interactive Curriculum Panels */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {panelDescriptions.map((panel, idx) => {
              const Icon = panel.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePanel(idx)}
                  className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all text-left flex items-start gap-3 group"
                >
                  <div className={`p-2.5 rounded-lg bg-white/5 ${panel.accent} group-hover:scale-105 transition-transform shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5 group-hover:text-cyan-300 transition-colors">
                      {panel.title}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      Click to view syllabus →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Retention & Impact Badges */}
          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 pt-4 border-t border-white/5 gap-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 size={14} /> 95% Workshop Participant Retention Rate
            </span>
            <span>Focus: Practical Engineering Over Theory</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceConsole;
