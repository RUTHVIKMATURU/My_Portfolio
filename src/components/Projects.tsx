import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'IntelliVision-AI',
      description: 'Real-time AI system integrating YOLO (ONNX) and BLIP models for object detection and context-aware scene captioning with a FastAPI backend.',
      tech: ['React', 'FastAPI', 'ONNX', 'MERN', 'AI/ML'],
      github: 'https://github.com/RUTHVIKMATURU/IntelliVision-AI',
      demo: '',
      features: [
        'Real-time object detection using YOLO ONNX models',
        'Intelligent scene captioning with BLIP transformer',
        'FastAPI backend for high-performance ML inference',
        'Responsive React frontend with live camera integration'
      ],
    },
    {
      title: 'Event App',
      description: 'Full-stack event management application enabling users to create, manage, and RSVP to events with real-time updates and notifications.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase'],
      github: 'https://github.com/RUTHVIKMATURU/eventApp',
      demo: '',
      features: [
        'User authentication with Firebase',
        'Real-time event creation and RSVP tracking',
        'Push notifications for event updates',
        'Interactive event discovery dashboard'
      ],
    },
    {
      title: 'Blog Web App',
      description: 'Full-stack blogging platform with real-time data synchronization, featuring secure user authentication and a rich-text editor for seamless content creation.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase'],
      github: 'https://github.com/RUTHVIKMATURU/BlogApp',
      demo: '',
      features: [
        'Rich-text editing for content creation',
        'Real-time database synchronization',
        'User profiles and comment systems',
        'SEO optimized blog post routing'
      ],
    },
    {
      title: 'Campus Career Connect',
      description: 'Peer-to-peer mentorship platform implementing user profiles, secure messaging, and searchable mentor directory to connect junior and senior students.',
      tech: ['MERN Stack', 'Firebase', 'WebSocket'],
      github: 'https://github.com/RUTHVIKMATURU/campus-connect',
      demo: '',
      features: [
        'Real-time messaging via WebSockets',
        'Mentor/Mentee matching algorithm',
        'Vetted student profile verification',
        'Searchable directory with filter capabilities'
      ],
    },
    {
      title: 'Hostel Management System',
      description: 'Comprehensive portal digitizing hostel administration for 2000+ residents, automating room allocation, fee processing, and complaint resolution.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/RUTHVIKMATURU/hostel-management-system',
      demo: 'https://hostel-management-system-vert.vercel.app/',
      features: [
        'Automated room allocation logic',
        'Digital fee payment and tracking',
        'Complaint management system with status updates',
        'Admin dashboard for resident analytics'
      ],
    },
    {
      title: 'Movie Matrix DBMS',
      description: 'Relational database system managing large-scale movie datasets with normalized schema, complex SQL queries, and optimized indexing for efficient retrieval.',
      tech: ['SQL', 'MySQL', 'Database Design'],
      github: '#',
      demo: '',
      features: [
        '3NF normalized relational schema',
        'Optimized SQL queries for large datasets',
        'User management and review tracking',
        'Complex joins for movie recommendation logic'
      ],
    },
    {
      title: 'Course Registration App',
      description: 'Standalone desktop application using pure Java AWT, demonstrating core GUI principles with robust event handling and JDBC for persistent data storage.',
      tech: ['Java', 'AWT', 'JDBC', 'MySQL'],
      github: 'https://github.com/RUTHVIKMATURU/javaAWT',
      demo: '',
      features: [
        'Pure Java AWT graphical interface',
        'JDBC connection for MySQL reliability',
        'Robust transaction management',
        'Event-driven GUI architecture'
      ],
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
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

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
