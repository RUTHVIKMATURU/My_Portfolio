import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, ExternalLink, Award } from 'lucide-react';
import { COMPETITIVE_PROFILES, CONTEST_HONORS } from '../data/portfolioData';

const CodingProfiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="profiles" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Trophy size={13} />
            VERIFIED PROOF OF WORK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Algorithmic pedigree &{' '}
            <span className="text-gradient-cyan">contest rankings.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            1,500+ competitive programming problems solved under strict time bounds with mathematical optimality.
          </p>
        </motion.div>

        {/* 4 Competitive Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {COMPETITIVE_PROFILES.map((profile, idx) => (
            <motion.a
              key={profile.platform}
              href={profile.handleUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-[#0b0f17]/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.platform}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {profile.badge}
                  </span>
                </div>

                {/* Rating / Stat Number */}
                <div className="mb-4">
                  <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
                    {profile.rating > 0 ? profile.rating : '100%'}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mt-0.5">
                    <span className="text-cyan-400 font-semibold">{profile.percentileOrRank}</span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  {profile.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span className="line-clamp-2 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                <span>@{profile.username}</span>
                <ExternalLink size={13} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contest Honors Board */}
        <div className="p-7 sm:p-9 rounded-2xl bg-[#0b0f17]/90 border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-amber-400" />
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Contest Leaderboard Finishes & Podium Honors
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Verified Collegiate & National Tournaments
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONTEST_HONORS.map((honor, idx) => (
              <motion.div
                key={honor.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {honor.position}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{honor.year}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                    {honor.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mb-3">
                    {honor.organizer} • {honor.scope}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {honor.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
