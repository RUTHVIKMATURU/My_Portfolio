import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl bg-[#0b0f17]/90 border border-white/10 hover:border-cyan-500/35 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-xl relative overflow-hidden"
    >
      {/* Ambient background glow on hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-cyan-300">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-slate-500">{project.year}</span>
          </div>

          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              <Sparkles size={11} /> Flagship
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-cyan-400/90 mb-3 line-clamp-1">
          {project.subtitle}
        </p>

        {/* Summary Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
          {project.summary}
        </p>

        {/* Architecture Highlights / Metrics */}
        {project.metrics && project.metrics.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-5">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block">
                  {m.label}
                </span>
                <span className="text-xs sm:text-sm font-bold font-mono text-white">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] font-mono text-slate-400 line-clamp-2">
            Key Focus: {project.architecture[0] || project.approach}
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <button
          onClick={onClick}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 font-mono group-hover:gap-2 transition-all"
        >
          <Layers size={14} />
          <span>Case Study & Arch</span>
          <ArrowRight size={13} />
        </button>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors"
              title="View GitHub Repository"
              aria-label={`${project.title} GitHub`}
            >
              <Github size={15} />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black border border-cyan-500/20 transition-colors"
              title="Launch Live Demo"
              aria-label={`${project.title} Demo`}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
