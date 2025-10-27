import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, Building2 } from 'lucide-react';

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certificates = [
    {
      name: 'MERN Stack Development',
      organization: 'Udemy',
      date: '2024',
      description: 'Full-stack web development with MongoDB, Express, React, and Node.js',
    },
    {
      name: 'Data Visualization with Tableau',
      organization: 'Coursera',
      date: '2024',
      description: 'Advanced data visualization and dashboard creation',
    },
    {
      name: 'Google Cloud Skills Boost',
      organization: 'Google Cloud',
      date: '2024',
      description: 'Cloud computing fundamentals and GCP services',
    },
    {
      name: '1st Place - Smart Interviews Leaderboard',
      organization: 'VNRVJIET',
      date: '2024',
      description: 'Top performer in competitive programming challenge',
    },
    {
      name: '27th Rank - Top 100 Coders 2k24',
      organization: 'CodeChef',
      date: '2024',
      description: 'National level coding competition',
    },
    {
      name: '12th Rank - Turing Cup 2k25',
      organization: 'College Competition',
      date: '2025',
      description: 'Inter-college programming contest',
    },
  ];

  return (
    <section id="certificates" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient glow-text mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-effect rounded-xl p-6 group cursor-pointer relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg"
                  >
                    <Award className="w-6 h-6 text-black" />
                  </motion.div>
                  <span className="px-3 py-1 text-xs border border-yellow-400/50 rounded-full text-yellow-400">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300 mb-2">
                  {cert.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Building2 size={14} />
                  <span>{cert.organization}</span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Technical Head - ISTE VNRVJIET
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Demonstrated strong organizational and technical support skills by co-organizing workshops
              on Web Development, AI, and Git/GitHub, ensuring seamless event execution and effective
              participant guidance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
