import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Layers, AlertCircle, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#04060a]/85 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b0f17] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-9 z-10 custom-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-8 pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">• {project.year}</span>
            {project.featured && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Flagship System
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base font-mono text-cyan-300">
            {project.subtitle}
          </p>
        </div>

        {/* Quick Metrics Bar */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-8">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1">
                  {metric.label}
                </span>
                <span className="text-base sm:text-lg font-bold font-mono text-white">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-8 text-slate-300 text-sm sm:text-base">
          {/* Problem & Approach */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-red-950/10 border border-red-500/20">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-400 mb-2.5">
                <AlertCircle size={15} />
                The Problem & Bottleneck
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-cyan-950/10 border border-cyan-500/20">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2.5">
                <CheckCircle2 size={15} />
                The Engineering Solution
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Technical Architecture Breakdown */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Layers size={17} className="text-cyan-400" />
              System Architecture & Core Mechanics
            </h3>
            <div className="space-y-2.5">
              {project.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <ArrowRight size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Engineering Decisions */}
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <Cpu size={17} className="text-indigo-400" />
              Key Engineering Decisions & Trade-Offs
            </h3>
            <div className="space-y-2.5">
              {project.keyDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold mb-3">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact & Result */}
          <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-500/25">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Measurable Result & Verification
            </span>
            <p className="text-slate-200 text-xs sm:text-sm font-medium">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Action Footers */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-colors"
              >
                <Github size={16} />
                <span>View Source Code</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs sm:text-sm font-semibold transition-colors shadow-lg shadow-cyan-500/20"
              >
                <ExternalLink size={16} />
                <span>Launch Live System</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            Close Window [ESC]
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
