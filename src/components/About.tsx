import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Cpu, Database, Layers, Wrench, GraduationCap, CheckCircle2, type LucideIcon } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const categoryIcons: Record<string, LucideIcon> = {
  'Core Languages': Code2,
  'Backend & Systems Engineering': Server,
  'AI & Machine Learning': Cpu,
  'Databases & Data Infrastructure': Database,
  'Modern Frontend Architecture': Layers,
  'DevOps, Cloud & Tooling': Wrench,
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <GraduationCap size={13} />
            TECHNICAL DEPTH & ACADEMIC BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered with deep{' '}
            <span className="text-gradient-cyan">technical foundations.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            No meaningless 90% progress bars. Here is my exact technical arsenal, organized by engineering domain with real-world application context.
          </p>
        </motion.div>

        {/* Top Profile Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 p-7 sm:p-9 rounded-2xl bg-[#0b0f17]/90 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                <span>VNRVJIET • Hyderabad</span>
                <span>•</span>
                <span>B.Tech in CSE (AI & ML)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Software Engineer with an algorithmic backbone.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently pursuing my B.Tech in CSE (AIML) at <span className="text-white font-medium">VNRVJIET</span> with a <span className="text-cyan-300 font-bold font-mono">9.14 GPA</span>. I excel at translating complex algorithmic concepts into robust production architectures. Drawing on my professional experience as a <span className="text-white font-medium">Competitive Coding Writer at Mercor</span>, I approach every project with strict mathematical correctness, asymptotic efficiency, and proactive edge-case defense.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Algorithms & Data Structures</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Distributed & Web Architectures</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Computer Vision & Transformers</span>
                </div>
              </div>
            </div>

            {/* Quick Stats Column */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="p-3.5 rounded-lg bg-[#07090e] border border-white/5 text-center">
                <span className="text-2xl font-extrabold font-mono text-cyan-400 block">9.14</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Cumulative GPA</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#07090e] border border-white/5 text-center">
                <span className="text-2xl font-extrabold font-mono text-emerald-400 block">2268</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">LeetCode Peak</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#07090e] border border-white/5 text-center">
                <span className="text-2xl font-extrabold font-mono text-indigo-400 block">1,500+</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">DSA Solved</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#07090e] border border-white/5 text-center">
                <span className="text-2xl font-extrabold font-mono text-amber-400 block">2,000+</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">Users Served</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categorized Technical Skills Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = categoryIcons[category.title] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0b0f17]/90 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{category.title}</h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="text-xs font-semibold text-white">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                            skill.level === 'Advanced'
                              ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                              : 'bg-white/5 text-slate-400 border border-white/5'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        {skill.context && (
                          <span className="text-[11px] font-mono text-slate-400 block truncate">
                            {skill.context}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
