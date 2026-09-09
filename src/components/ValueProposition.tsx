import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Cpu, Server, Users, ArrowUpRight, CheckCircle2, Award } from 'lucide-react';
import { VALUE_PILLARS } from '../data/portfolioData';

const iconMap = [
  ShieldCheck, // Algorithmic Rigor
  Server,      // Production Systems
  Cpu,         // Applied AI
  Users,       // Leadership
];

const ValueProposition = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="value" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Award size={13} />
            RECRUITER PERSPECTIVE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why I deliver immediate value on{' '}
            <span className="text-gradient-cyan">day one.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Most early-career engineers build toy CRUD apps with zero algorithmic rigor, or grind contests without shipping production software. I bridge both worlds.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {VALUE_PILLARS.map((pillar, idx) => {
            const IconComponent = iconMap[idx] || CheckCircle2;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl p-7 sm:p-8 bg-[#0b0f17]/90 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Subtle top accent beam */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                        <IconComponent size={22} />
                      </div>
                      <span className="font-mono text-sm font-bold text-slate-500">
                        {pillar.number}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-cyan-400/90 bg-cyan-500/5 px-2.5 py-1 rounded-full border border-cyan-500/15">
                      Verified Impact
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-cyan-400/80 mb-3 font-medium">
                    // {pillar.tagline}
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Evidence List */}
                <div className="pt-4 border-t border-white/5 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Concrete Evidence:
                  </span>
                  {pillar.evidence.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recruiter Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-[#0e1422] to-blue-950/20 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span>Ready for technical interviews</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Confident in Systems Design, Complex DSA, Data Modeling, and Full-Stack Implementation.
            </p>
          </div>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-black text-white text-xs font-semibold border border-white/15 hover:border-cyan-400 transition-all whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Schedule Conversation</span>
            <ArrowUpRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
