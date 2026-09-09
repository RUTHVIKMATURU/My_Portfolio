import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

const WorkExperience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Briefcase size={13} />
            CAREER & LEADERSHIP JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            A track record of{' '}
            <span className="text-gradient-cyan">algorithmic growth & impact.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            From authoring Olympiad-level problems for Mercor to directing technical workshops for 500+ student developers at ISTE.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="space-y-8 relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/50 via-indigo-500/30 to-transparent" />

          {EXPERIENCE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative md:pl-20"
            >
              {/* Timeline Node Dot */}
              <div className="hidden md:flex absolute left-6 top-7 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0b0f17] border-2 border-cyan-400 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="p-7 sm:p-9 rounded-2xl bg-[#0b0f17]/90 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl relative overflow-hidden group">
                {/* Background ambient accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/[0.06] transition-colors" />

                {/* Top Meta Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">• {item.type}</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} className="text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role & Org */}
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-base sm:text-lg font-mono text-cyan-400 font-medium mt-0.5">
                    @ {item.organization}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3 mb-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <ChevronRight size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stats & Skills Row */}
                <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {item.stats && (
                    <div className="flex items-center gap-4 shrink-0 font-mono">
                      {item.stats.map((st, sIdx) => (
                        <div key={sIdx} className="text-right">
                          <span className="text-xs font-bold text-white block">{st.value}</span>
                          <span className="text-[10px] text-slate-400 uppercase">{st.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
