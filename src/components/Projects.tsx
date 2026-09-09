import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Layers, Sparkles, Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { FEATURED_PROJECTS, SECONDARY_PROJECTS, Project } from '../data/portfolioData';

const categories = ['All', 'Full-Stack', 'AI/ML', 'Systems & DBMS', 'Desktop'] as const;

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredSecondary = useMemo(() => {
    if (activeFilter === 'All') return SECONDARY_PROJECTS;
    return SECONDARY_PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Layers size={13} />
            PRODUCTION WORK & CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Systems designed for{' '}
            <span className="text-gradient-cyan">scale & performance.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Deep-dive into real architectures: hardware-accelerated computer vision, platforms serving 2,000+ residents, and modern generative AI workflows.
          </p>
        </motion.div>

        {/* Flagship Projects: 2x2 Grid with Enhanced Visual Attention */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={16} className="text-cyan-400" />
            <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
              Flagship Engineering Projects (Case Studies)
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {FEATURED_PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secondary Projects Section with Filter */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Code2 size={16} className="text-indigo-400" />
              <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
                Additional Technical Projects
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    activeFilter === category
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredSecondary.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
