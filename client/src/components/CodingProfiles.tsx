import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Trophy, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import CountUp from './CountUp';
import Skeleton from './Skeleton';

const CodingProfiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/coding-profiles');
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 86400000);
    return () => clearInterval(interval);
  }, []);

  const profiles = [
    {
      name: 'LeetCode',
      icon: Code2,
      username: 'ruthvik0811',
      solved: data?.leetcode?.solved || 350,
      rating: 2072,
      maxRating: 2072,
      rank: data?.leetcode?.rank || 'Top 5%',
      link: 'https://leetcode.com/u/ruthvik0811',
      color: 'from-cyan-400 to-blue-500',
      isLive: true,
    },
    {
      name: 'CodeChef',
      icon: Trophy,
      username: 'ruthvik0811',
      solved: data?.codechef?.solved || 500,
      rating: data?.codechef?.rating || 1815,
      maxRating: data?.codechef?.maxRating || 1815,
      rank: data?.codechef?.stars ? `${data.codechef.stars} Stars` : '4 Stars',
      link: 'https://codechef.com/users/ruthvik0811',
      color: 'from-orange-500 to-red-500',
      isLive: true,
    },
    {
      name: 'Codeforces',
      icon: TrendingUp,
      username: 'ruthvik0811',
      solved: data?.codeforces?.solved || 350,
      rating: data?.codeforces?.rating || 1415,
      maxRating: data?.codeforces?.maxRating || 1415,
      rank: data?.codeforces?.rank || 'Specialist',
      link: 'https://codeforces.com/profile/ruthvik0811',
      color: 'from-blue-400 to-blue-600',
      isLive: true,
    },
    {
      name: 'GitHub',
      icon: Code2,
      username: 'RUTHVIKMATURU',
      solved: null,
      maxRating: null,
      rank: 'Open Source Projects',
      link: 'https://github.com/RUTHVIKMATURU',
      color: 'from-gray-400 to-gray-600',
      isLive: false,
    },
  ];

  return (
    <section id="profiles" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient glow-text mb-4">
            Coding Profiles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            {data ? (
              <><CountUp value={1050} />+ Problems Solved Across Platforms</>
            ) : (
              '1050+ Problems Solved Across Platforms'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {loading ? (
            [...Array(4)].map((_, i) => <Skeleton key={i} />)
          ) : (
            profiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <motion.a
                  key={profile.name}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-effect rounded-2xl p-8 group cursor-pointer relative overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
                >
                  {/* Accent Icon Background */}
                  <div className={`absolute top-4 right-4 p-4 rounded-xl bg-gradient-to-br ${profile.color} opacity-20 group-hover:opacity-40 transition-opacity`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-3xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                      {profile.name}
                    </h3>
                    {profile.isLive && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Live</span>
                      </div>
                    )}
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                    {profile.solved !== null && (
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Solved</p>
                        <p className="text-2xl font-bold text-white">
                          {typeof profile.solved === 'number' ? <CountUp value={profile.solved} /> : profile.solved}
                        </p>
                      </div>
                    )}

                    {profile.maxRating !== null && (
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                          {profile.name === 'GitHub' ? 'Followers' : 'Max Rating'}
                        </p>
                        <p className="text-2xl font-bold text-white">
                          <CountUp value={profile.maxRating} />
                        </p>
                      </div>
                    )}

                    <div className={`space-y-1 ${profile.solved === null && profile.maxRating === null ? 'col-span-3' : 'col-span-2 md:col-span-1'}`}>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                        {profile.name === 'GitHub' ? 'Contribution' : 'Rank / Tier'}
                      </p>
                      <p className="text-xl font-bold text-white truncate">
                        {typeof profile.rank === 'number' ? `#${profile.rank.toLocaleString()}` : profile.rank}
                      </p>
                    </div>
                  </div>

                  {/* Hover Bottom Glow */}
                  <motion.div
                    className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${profile.color} opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`}
                  />
                </motion.a>
              );
            })
          )}
        </div>

        {error && (
          <p className="text-center text-red-400 mb-8 flex items-center justify-center gap-2">
            ⚠️ Live stats unavailable. Showing last recorded data.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-effect rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">
            Contest Rankings
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-lg border border-white/5"
            >
              <div className="text-4xl font-bold text-gradient mb-2">1st</div>
              <p className="text-white font-semibold mb-1">Smart Interviews Leaderboard</p>
              <p className="text-gray-400 text-sm">VNRVJIET</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-lg border border-white/5"
            >
              <div className="text-4xl font-bold text-gradient mb-2">12th</div>
              <p className="text-white font-semibold mb-1">Turing Cup 2k25</p>
              <p className="text-gray-400 text-sm">Inter-College</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-lg border border-white/5"
            >
              <div className="text-4xl font-bold text-gradient mb-2">11th</div>
              <p className="text-white font-semibold mb-1">Top 100 Coders 2k25</p>
              <p className="text-gray-400 text-sm">College Level</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
