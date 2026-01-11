import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Event App',
      description: 'Full-stack event management application enabling users to create, manage, and RSVP to events with real-time updates and notifications.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase'],
      github: 'https://github.com/RUTHVIKMATURU/eventApp',
      demo: '',
    },
    {
      title: 'Blog Web App',
      description: 'Full-stack blogging platform with real-time data synchronization, featuring secure user authentication and a rich-text editor for seamless content creation.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase'],
      github: 'https://github.com/RUTHVIKMATURU/BlogApp',
      demo: '',
    },
    {
      title: 'Campus Career Connect',
      description: 'Peer-to-peer mentorship platform implementing user profiles, secure messaging, and searchable mentor directory to connect junior and senior students.',
      tech: ['MERN Stack', 'Firebase', 'WebSocket'],
      github: 'https://github.com/RUTHVIKMATURU/campus-connect',
      demo: '',
    },
    {
      title: 'Hostel Management System',
      description: 'Comprehensive portal digitizing hostel administration for 2000+ residents, automating room allocation, fee processing, and complaint resolution.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/RUTHVIKMATURU/hostel-management-system',
      demo: 'https://hostel-management-system-vert.vercel.app/',
    },
    {
      title: 'Movie Matrix DBMS',
      description: 'Relational database system managing large-scale movie datasets with normalized schema, complex SQL queries, and optimized indexing for efficient retrieval.',
      tech: ['SQL', 'MySQL', 'Database Design'],
      github: '#',
      demo: '',
    },
    {
      title: 'Course Registration App',
      description: 'Standalone desktop application using pure Java AWT, demonstrating core GUI principles with robust event handling and JDBC for persistent data storage.',
      tech: ['Java', 'AWT', 'JDBC', 'MySQL'],
      github: 'https://github.com/RUTHVIKMATURU/javaAWT',
      demo: '',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient glow-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-xl p-6 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-yellow-400/50 rounded-full text-yellow-400 group-hover:border-orange-500 group-hover:text-orange-500 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-black font-semibold text-sm"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-yellow-400 rounded-lg text-white font-semibold text-sm hover:border-orange-500 transition-colors duration-300"
                    >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                  )}
                </div>
              </div>

              <motion.div
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
