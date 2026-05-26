import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { Briefcase, Award, ChevronRight } from 'lucide-react';

const WorkExperience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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

  return (
    <section id="experience" className="py-20 px-4 relative min-h-[80vh] flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-[30%] -right-[10%] w-[30%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[30%] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
            <Briefcase size={12} />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-purple-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="perspective-1000"
        >
          <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            glareEnable={false}
            className="transform-style-3d"
          >
            <div
              onMouseMove={handleMouseMove}
              className="relative glass-effect rounded-[2.5rem] p-1 overflow-hidden group border border-emerald-500/30"
            >
              {/* Dynamic Energy Field Border & Glow */}
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-0"
                style={{
                  background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-purple-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              {/* Inner Content Wrapper */}
              <div className="relative z-10 bg-black/90 backdrop-blur-3xl rounded-[2.3rem] p-8 md:p-12 transform-style-3d">
                
                {/* Left Content Area */}
                <div className="translate-z-20">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                        Competitive Coding Writer
                      </h3>
                      <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
                        @ Mercor
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300 uppercase tracking-widest whitespace-nowrap">
                      Nov 2025 – Feb 2026
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 max-w-4xl">
                    <p className="text-gray-300 text-lg leading-relaxed flex items-start gap-3">
                      <ChevronRight className="text-emerald-500 shrink-0 mt-1" size={20} />
                      Architected and engineered highly complex algorithmic problem statements spanning advanced data structures, graph theory, and dynamic programming.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed flex items-start gap-3">
                      <ChevronRight className="text-emerald-500 shrink-0 mt-1" size={20} />
                      Authored comprehensive editorial explanations and mathematical proofs, breaking down optimal time/space complexity approaches for global competitors.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed flex items-start gap-3">
                      <ChevronRight className="text-emerald-500 shrink-0 mt-1" size={20} />
                      Designed rigorous, edge-case tested suites capable of stress-testing solutions up to 10^5 constraints without TLE or MLE failures.
                    </p>
                  </div>

                  {/* Algorithmic Pedigree Badges */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-transparent border border-emerald-500/20 translate-z-30 inline-block">
                    <div className="flex items-center gap-2 mb-4 text-xs font-black uppercase tracking-widest text-emerald-400">
                      <Award size={14} />
                      Algorithmic Pedigree
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="px-4 py-2 rounded-lg bg-black/60 border border-red-500/30 flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-5 h-5 filter invert opacity-80" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">Guardian</p>
                          <p className="text-sm font-black text-red-400">Max: 2245</p>
                        </div>
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-black/60 border border-purple-500/30 flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png" alt="CodeChef" className="w-5 h-5 filter invert opacity-80 object-contain" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">4-Star</p>
                          <p className="text-sm font-black text-purple-400">Max: 1839</p>
                        </div>
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-black/60 border border-cyan-500/30 flex items-center gap-3">
                         <img src="https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png" alt="Codeforces" className="w-5 h-5 opacity-80" />
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">Specialist</p>
                          <p className="text-sm font-black text-cyan-400">Max: 1499</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
