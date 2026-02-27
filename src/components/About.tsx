import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Wrench, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    { name: 'Java', icon: Code2, category: 'Languages' },
    { name: 'Python', icon: Code2, category: 'Languages' },
    { name: 'Flask', icon: Code2, category: 'Languages' },
    { name: 'C++', icon: Code2, category: 'Languages' },
    { name: 'C', icon: Code2, category: 'Languages' },
    { name: 'DSA', icon: Code2, category: 'Algorithms' },
    { name: 'JavaScript', icon: Code2, category: 'Languages' },
    { name: 'SQL', icon: Database, category: 'Languages' },
    { name: 'React', icon: Wrench, category: 'Frameworks' },
    { name: 'Node.js', icon: Wrench, category: 'Frameworks' },
    { name: 'MongoDB', icon: Database, category: 'Databases' },
    { name: 'Express', icon: Wrench, category: 'Frameworks' },
    { name: 'Git', icon: Lightbulb, category: 'Tools' },
    { name: 'Tableau', icon: Lightbulb, category: 'Tools' },
    { name: 'Power BI', icon: Lightbulb, category: 'Tools' },
    { name: 'Figma', icon: Lightbulb, category: 'Tools' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient glow-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 211, 238, 0.5)',
                    '0 0 40px rgba(59, 130, 246, 0.6)',
                    '0 0 20px rgba(34, 211, 238, 0.5)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <span className="text-8xl font-bold text-gradient">RM</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              A dedicated software developer with a strong foundation in Data Structures, Algorithms,
              and Object-Oriented Programming using Java and Python. Currently pursuing B.Tech in CSE (AIML)
              at VNRVJIET with a GPA of 9.26/10.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I leverage my background in competitive programming and full-stack MERN development to
              engineer efficient, high-quality solutions. With 1050+ problems solved across multiple
              platforms and several top rankings in coding contests, I bring both theoretical knowledge
              and practical experience to every project.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="glass-effect px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold text-gradient">9.26</p>
                <p className="text-sm text-gray-400">GPA</p>
              </div>
              <div className="glass-effect px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold text-gradient">1350+</p>
                <p className="text-sm text-gray-400">Problems Solved</p>
              </div>
              <div className="glass-effect px-6 py-3 rounded-lg">
                <p className="text-2xl font-bold text-gradient">5+</p>
                <p className="text-sm text-gray-400">Projects</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gradient mb-12">
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-12">
            {['Languages', 'Frameworks', 'Databases', 'Tools', 'Algorithms'].map((cat, catIdx) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + catIdx * 0.1 }}
                className="flex-1 min-w-[280px] max-w-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                    {cat === 'Languages' && <Code2 className="w-5 h-5 text-cyan-400" />}
                    {cat === 'Frameworks' && <Wrench className="w-5 h-5 text-cyan-400" />}
                    {cat === 'Databases' && <Database className="w-5 h-5 text-cyan-400" />}
                    {cat === 'Tools' && <Lightbulb className="w-5 h-5 text-cyan-400" />}
                    {cat === 'Algorithms' && <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <h4 className="text-xl font-bold text-white">{cat}</h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter(s => s.category === cat)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          scale: 1.05,
                          translateY: -5,
                          backgroundColor: 'rgba(34, 211, 238, 0.1)'
                        }}
                        className="glass-effect px-4 py-2 rounded-full flex items-center gap-2 group cursor-default transition-all duration-300"
                      >
                        <skill.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
