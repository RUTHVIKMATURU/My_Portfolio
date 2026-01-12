import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Building2 } from 'lucide-react';
import { useState } from 'react';

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const certificates = [
    
    {
      name: 'MERN Stack Development',
      organization: 'VNRVJIET',
      date: '2024',
      description: 'Full-stack web development with MongoDB, Express, React, and Node.js',
    },
    {
      name: 'Google Cloud Skills Boost',
      organization: 'Google Cloud',
      date: '2024',
      description: 'Cloud computing fundamentals and GCP services',
      image:'src/assets/GoogleCloud.png'
    },
    {
      name: '1st Place - Smart Interviews',
      organization: 'VNRVJIET',
      date: '2024',
      description: 'Top performer in competitive programming challenge',
    },
    {
      name: '27th Rank - Top 100 Coders 2k24',
      organization: 'Krithomedh',
      date: '2024',
      description: 'College level coding competition',
    },
    {
      name: '11th Rank - Top 100 Coders 2k25',
      organization: 'Krithomedh',
      date: '2025',
      description: 'College level coding competition',
    },
    {
      name: '12th Rank - Turing Cup 2k25',
      organization: 'Inter College Competition',
      date: '2025',
      description: 'Inter-college programming contest',
      image:'src/assets/TuringCup2k25.png'
    },
    {
      name: '2nd Rank - Codeverse 2k25',
      organization: 'Turing Hut',
      date: '2025',
      description: 'College level coding competition',
    },
    {
      name: '7th Rank - Coding Contest 2k25',
      organization: 'Turing Hut',
      date: '2025',
      description: 'Inter College coding competition',
    }
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
          {certificates.map((cert, index) => {
          const [flipped, setFlipped] = useState(false);

          return (
            <motion.div
              key={cert.name}
              className="relative h-72 perspective cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setFlipped(!flipped)}
            >
              <motion.div
                className="w-full h-full preserve-3d"
                transition={{ duration: 0.7 }}
                
              >
                {/* Front */}
                {!flipped && <div className="absolute inset-0 glass-effect rounded-xl p-6 backface-hidden">
                  <div className="flex justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                      <Award className="w-6 h-6 text-black" />
                    </div>
                    <span className="px-3 py-3 text-xs border border-yellow-400/50 rounded text-yellow-400"> 
                      {cert.date} 
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Building2 size={14} />
                    <span>{cert.organization}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{cert.description}</p>
                </div>
                }
                {/* Back */}
                {flipped && <div className="absolute inset-0 glass-effect rounded-xl p-4 rotate-y-180 backface-hidden flex items-center justify-center">
                  {cert.image ? (
                    <div className="absolute inset-0 rotate-y-180 backface-hidden glass-effect rounded-xl p-4 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="max-h-full object-contain rounded-lg"
                      />
                    </div>

                  ) : (
                    <p className="text-gray-400 text-sm">No Certificate Available</p>
                  )}
                </div>
                }
              </motion.div>
            </motion.div>
          );
        })}
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
