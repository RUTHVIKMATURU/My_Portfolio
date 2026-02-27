import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layoutId={`card-${project.title}`}
      onClick={onClick}
      whileHover={{ y: -10 }}
      className="glass-effect rounded-2xl p-6 group relative overflow-hidden cursor-pointer border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="relative z-10 space-y-4">
        <motion.h3
          layoutId={`title-${project.title}`}
          className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300"
        >
          {project.title}
        </motion.h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] border border-cyan-400/30 rounded-full text-cyan-400/80 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] text-gray-500 self-center">+{project.tech.length - 3} more</span>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold group-hover:gap-2 transition-all duration-300">
            Learn More
            <ExternalLink size={14} />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
      />
    </motion.div>
  );
};

export default ProjectCard;
