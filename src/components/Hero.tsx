import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, Sparkles, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, HERO_METRICS } from '../data/portfolioData';

interface HeroProps {
  onResumeClick: () => void;
}

const Hero = ({ onResumeClick }: HeroProps) => {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Positioning Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="text-cyan-300 font-semibold">Mercor Problem Writer</span>
          <span className="text-slate-500">•</span>
          <span>LeetCode Guardian (2268)</span>
          <span className="text-slate-500">•</span>
          <span>VNRVJIET CSE (9.14 GPA)</span>
        </motion.div>

        {/* Primary Name & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Engineering scalable systems with{' '}
            <span className="text-gradient-cyan">algorithmic precision.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
            I’m <span className="font-semibold text-white">{PERSONAL_INFO.name}</span> — a software engineer operating at the convergence of <span className="text-white font-medium">high-performance web architecture</span> and <span className="text-white font-medium">applied AI systems</span>, backed by an elite competitive programming foundation.
          </p>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-8 pb-10"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#07090e] font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 flex items-center gap-2 group"
          >
            <span>Explore Case Studies</span>
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onResumeClick}
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/25 font-semibold text-sm transition-all duration-200 flex items-center gap-2 backdrop-blur-md"
          >
            <FileText size={16} className="text-cyan-400" />
            <span>View Resume</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>

        {/* High-Conviction Proof Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4"
        >
          {HERO_METRICS.map((metric, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[#0b0f17]/80 border border-white/10 backdrop-blur-md text-left surface-card-hover group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-medium">
                  {metric.label}
                </span>
                {metric.highlight && (
                  <Sparkles size={13} className="text-cyan-400 opacity-80 group-hover:scale-110 transition-transform" />
                )}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                {metric.value}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-sans mt-1">
                {metric.subtext}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Scroll Hint */}
      <motion.button
        onClick={() => document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-14 flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors text-xs font-mono group"
        aria-label="Scroll to Why Me section"
      >
        <span>DISCOVER CANDIDATE PROOF</span>
        <ArrowDown size={14} className="animate-bounce text-cyan-400/80 group-hover:text-cyan-300" />
      </motion.button>
    </section>
  );
};

export default Hero;
