import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, Sparkles } from 'lucide-react';
import { ENGINEERING_PHILOSOPHY } from '../data/portfolioData';

const EngineeringPhilosophy = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Compass size={13} />
            ENGINEERING PHILOSOPHY & CURIOSITY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How I think & what I’m{' '}
            <span className="text-gradient-cyan">exploring next.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            "{ENGINEERING_PHILOSOPHY.quote}"
          </p>
        </motion.div>

        {/* 4 Engineering Principles */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {ENGINEERING_PHILOSOPHY.principles.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-[#0b0f17]/90 border border-white/10 hover:border-cyan-500/30 transition-all group shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {principle.title}
                </h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Current Explorations Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-7 sm:p-9 rounded-2xl bg-gradient-to-r from-[#0e1422] via-[#0b0f17] to-[#0e1422] border border-cyan-500/20 shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={18} className="text-cyan-400" />
            <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
              Current Engineering Explorations & Deep Dives
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ENGINEERING_PHILOSOPHY.currentExplorations.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">
                    [Area {idx + 1}]
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">
                    {item.topic}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;
