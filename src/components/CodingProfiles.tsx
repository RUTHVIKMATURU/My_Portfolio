import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Trophy, TrendingUp } from 'lucide-react';

const CodingProfiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const profiles = [
    {
      name: 'LeetCode',
      icon: Code2,
      stats: '350+ Problems',
      rating: 'Max Rating: 1967',
      link: 'https://leetcode.com/u/ruthvik0811',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'CodeChef',
      icon: Trophy,
      stats: '500+ Problems',
      rating: 'Max Rating: 1815',
      link: 'https://codechef.com/users/ruthvik0811',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Codeforces',
      icon: TrendingUp,
      stats: '350+ Problems',
      rating: 'Max Rating: 1415',
      link: 'https://codeforces.com/profile/ruthvik0811',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      name: 'GitHub',
      icon: Code2,
      stats: 'Multiple Projects',
      rating: 'Open Source',
      link: 'https://github.com/RUTHVIKMATURU',
      color: 'from-gray-400 to-gray-600',
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
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">1050+ Problems Solved Across Platforms</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-effect rounded-xl p-8 text-center group cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`inline-block p-4 bg-gradient-to-br ${profile.color} rounded-2xl mb-4`}
                  >
                    <Icon className="w-12 h-12 text-black" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300 mb-2">
                    {profile.name}
                  </h3>

                  <div className="space-y-2 text-gray-400">
                    <p className="text-lg font-semibold">{profile.stats}</p>
                    <p className="text-sm">{profile.rating}</p>
                  </div>
                </div>

                <motion.div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${profile.color} opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500`}
                />
              </motion.a>
            );
          })}
        </div>

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
              className="text-center p-6 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg"
            >
              <div className="text-4xl font-bold text-gradient mb-2">1st</div>
              <p className="text-white font-semibold mb-1">Smart Interviews Leaderboard</p>
              <p className="text-gray-400 text-sm">VNRVJIET</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg"
            >
              <div className="text-4xl font-bold text-gradient mb-2">12th</div>
              <p className="text-white font-semibold mb-1">Turing Cup 2k25</p>
              <p className="text-gray-400 text-sm">Inter-College</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg"
            >
              <div className="text-4xl font-bold text-gradient mb-2">11th</div>
              <p className="text-white font-semibold mb-1">Top 100 Coders 2k25</p>
              <p className="text-gray-400 text-sm">College Level</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg"
            >
              <div className="text-4xl font-bold text-gradient mb-2">2nd</div>
              <p className="text-white font-semibold mb-1">Codeverse 2k25</p>
              <p className="text-gray-400 text-sm">College Level</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
