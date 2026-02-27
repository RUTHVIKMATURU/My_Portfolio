import { motion } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <motion.div
        layoutId={`card-${project.title}`}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-effect rounded-2xl p-6 md:p-10 shadow-2xl border border-cyan-400/20"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        >
          <X size={24} />
        </button>

        <div className="relative z-10">
          <motion.h2
            layoutId={`title-${project.title}`}
            className="text-3xl md:text-5xl font-bold text-gradient glow-text mb-6"
          >
            {project.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs border border-cyan-400/50 rounded-full text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 underline decoration-cyan-400">Description</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 underline decoration-cyan-400">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  {project.github && project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl text-black font-bold"
                    >
                      <Github size={20} />
                      View Code
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-400 rounded-xl text-white font-bold hover:bg-cyan-400/10 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
