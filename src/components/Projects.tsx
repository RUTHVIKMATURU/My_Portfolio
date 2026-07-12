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
      title: 'AI Travel Planner',
      description: 'Developed an AI-powered travel planning platform with secure authentication, personalized trip management, AI-generated itineraries, budget estimation, weather insights, and destination recommendations. Designed a responsive SaaS-inspired interface for seamless user experience.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'GenAI'],
      github: '#',
      demo: '',
      features: [
        'Secure authentication and personalized trip management',
        'AI-generated itineraries with budget estimation and weather insights',
        'Responsive SaaS-inspired interface for seamless user experience',
        'Integration with generative AI models for destination recommendations'
      ],
    },
    {
      title: 'IntelliVision-AI',
      description: 'High-performance AI inference engine leveraging YOLOv8 via ONNX runtime and BLIP transformer models to achieve real-time, low-latency object detection and context-aware scene captioning.',
      tech: ['React', 'FastAPI', 'ONNX', 'MERN', 'AI/ML'],
      github: 'https://github.com/RUTHVIKMATURU/IntelliVision-AI',
      demo: '',
      features: [
        'Optimized YOLOv8 integrations via ONNX for sub-millisecond AI inference latency',
        'Asynchronous FastAPI architecture scaling hardware-accelerated computer vision tasks',
        'BLIP transformer multi-modal pipelines executing real-time semantic scene descriptions',
        'WebRTC-driven React frontend engineered for continuous, low-latency video stream processing'
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
      description: 'Scalable peer-to-peer networking architecture engineered with complex MongoDB aggregation pipelines and Firebase real-time sync for optimized student-mentor matching and instant messaging.',
      tech: ['MERN Stack', 'Firebase', 'WebSocket'],
      github: 'https://github.com/RUTHVIKMATURU/campus-connect',
      demo: '',
      features: [
        'Advanced MongoDB schema modeling executing rapid multidimensional mentor/mentee matching queries',
        'Distributed state synchronization utilizing Firebase for ultra-low-latency peer-to-peer messaging',
        'High-throughput WebSocket infrastructure orchestrating real-time persistent connection pooling',
        'Optimized graph-like data structures indexing user profiles for scalable searchable directories'
      ],
    },
    {
      title: 'Hostel Management System',
      description: 'Highly available backend architecture built on Node.js/Express, utilizing advanced deployment routing strategies and load distribution concepts to support 2,000+ concurrent residents seamlessly.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/RUTHVIKMATURU/hostel-management-system',
      demo: 'https://hostel-management-system-vert.vercel.app/',
      features: [
        'Robust scaling architecture with optimized DB connection pooling handling 2,000+ concurrent users',
        'Advanced routing strategies with lazy loading and edge caching minimizing payload latency',
        'High-availability backend design employing non-blocking I/O and scalable resource allocation',
        'Complex algorithm for automated O(1) room allocation mapping across distributed residential blocks'
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
          <h2 className="text-4xl md:text-5xl font-bold text-gradient glow-text mb-4 pb-2">
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
