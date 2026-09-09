export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI/ML' | 'Systems & DBMS' | 'Desktop';
  featured: boolean;
  summary: string;
  problem: string;
  approach: string;
  architecture: string[];
  keyDecisions: string[];
  impact: string;
  tech: string[];
  github?: string;
  demo?: string;
  year: string;
  metrics?: { label: string; value: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Work' | 'Leadership' | 'Education';
  badge: string;
  description: string;
  highlights: string[];
  skills: string[];
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    context?: string;
  }[];
}

export interface CompetitiveProfile {
  platform: string;
  username: string;
  handleUrl: string;
  badge: string;
  rating: number;
  maxRating: number;
  solved: number;
  percentileOrRank: string;
  accentColor: string;
  highlights: string[];
}

export interface ContestHonor {
  title: string;
  position: string;
  organizer: string;
  scope: 'National' | 'Inter-College' | 'Campus';
  year: string;
  badge: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  category: 'Cloud' | 'Development' | 'Algorithms' | 'Analytics';
  image?: string;
  skills: string[];
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Ruthvik Maturu',
  initials: 'RM',
  role: 'Software Engineer & Algorithmic Specialist',
  headline:
    'Engineering scalable full-stack architectures and high-performance AI systems with Olympiad-grade algorithmic precision.',
  summary:
    'Computer Science & Engineering (AIML) undergraduate at VNRVJIET with a rare dual focus: elite competitive programming rigor (LeetCode Guardian 2268, Mercor Problem Writer) combined with production-ready software engineering (FastAPI, Next.js, WebSockets, real-world deployment for 2,000+ users).',
  email: 'ruthvik0811@gmail.com',
  phone: '+91 8297475089',
  location: 'Hyderabad, Telangana, India',
  resumePath: '/Ruthvik_Maturu.pdf',
  portfolioUrl: 'https://ruthvikmaturu.vercel.app/',
  github: 'https://github.com/RUTHVIKMATURU',
  linkedin: 'https://www.linkedin.com/in/ruthvik-maturu-86545228b/',
  leetcode: 'https://leetcode.com/u/ruthvik0811',
  codechef: 'https://codechef.com/users/ruthvik0811',
  codeforces: 'https://codeforces.com/profile/ruthvik0811',
  education: {
    degree: 'Bachelor of Technology in Computer Science & Engineering (AI & ML)',
    institution: 'VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET)',
    location: 'Hyderabad, India',
    period: 'Sep 2023 – Expected May 2027',
    gpa: '9.14 / 10',
    coursework: [
      'Data Structures & Algorithms',
      'Analysis of Algorithms',
      'Artificial Intelligence & ML',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
    ],
  },
};

export const HERO_METRICS = [
  {
    value: '2268',
    label: 'LeetCode Rating',
    subtext: 'Guardian • Top ~1% Globally',
    highlight: true,
  },
  {
    value: '1,500+',
    label: 'Problems Solved',
    subtext: 'LeetCode, CodeChef, Codeforces',
  },
  {
    value: '2,000+',
    label: 'Production Users',
    subtext: 'Active Hostel Platform Residents',
  },
  {
    value: '9.14',
    label: 'Cumulative GPA',
    subtext: 'B.Tech CSE (AI & ML)',
  },
];

export const VALUE_PILLARS = [
  {
    number: '01',
    title: 'Algorithmic Mastery & Rigor',
    tagline: 'Olympiad-level problem solving with mathematical guarantees',
    description:
      'Ranked LeetCode Guardian (Max 2268, Top ~1% globally) and hired by Mercor as a Competitive Coding Writer to author contest-grade graph theory and dynamic programming challenges. I engineer algorithms with rigorous time/space complexity proofs and stress test against 10^5 constraints.',
    evidence: [
      'Authored contest problems and edge-case stress suites for Mercor',
      'AIR 17 & Campus Rank 1 in Smart Interviews across 500+ peers',
      '1,500+ algorithmic problems solved with 4-Star CodeChef & Specialist Codeforces ratings',
    ],
  },
  {
    number: '02',
    title: 'Production Systems & Scalability',
    tagline: 'Not just tutorial apps — systems tested by real humans',
    description:
      'Engineered and deployed a centralized hostel management platform serving 2,000+ active residents with automated O(1) room allocation mapping, non-blocking asynchronous architectures, connection pooling, and JWT role-based access control.',
    evidence: [
      'Production deployment on Vercel handling live multi-role operations',
      'Optimized MongoDB schema aggregation pipelines for sub-50ms query latency',
      'High-throughput WebSocket connection pooling for persistent bidirectional feeds',
    ],
  },
  {
    number: '03',
    title: 'Applied AI & Hardware-Accelerated Inference',
    tagline: 'Bridging computer vision & generative AI to production web backends',
    description:
      'Designed end-to-end multi-modal inference pipelines integrating YOLOv8 via ONNX Runtime and BLIP transformer models over asynchronous FastAPI workers, delivering low-latency real-time video stream processing.',
    evidence: [
      'ONNX Runtime acceleration for sub-millisecond local vision inference',
      'Asynchronous FastAPI microservices decoupled from front-end WebRTC streams',
      'GenAI integration in SaaS workflows (AI Travel Planner dynamic itinerary generation)',
    ],
  },
  {
    number: '04',
    title: 'Technical Leadership & Mentorship',
    tagline: 'Multiplying engineering impact across 500+ student developers',
    description:
      'As Technical Head at ISTE VNRVJIET, I lead workshop curricula across AI, Web Development, Git workflows, and C++, personally troubleshooting technical bottlenecks for 500+ participants with a 95% workshop retention rate.',
    evidence: [
      'Conducted 12+ deep-tech hands-on engineering workshops',
      'Guided 35+ undergraduate technical project architectures',
      'Cultivated an active competitive programming culture within the department',
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'ai-travel-planner',
    title: 'AI Travel Planner',
    subtitle: 'Autonomous Itinerary Synthesis & Dynamic Expense Forecasting SaaS',
    category: 'Full-Stack',
    featured: true,
    year: '2026',
    summary:
      'A full-stack AI-driven SaaS platform that synthesizes personalized day-by-day travel itineraries, cost-optimized budget models, and real-time destination weather insights.',
    problem:
      'Traditional travel planning is fragmented across booking portals, static blogs, and spreadsheets. Users waste hours manually stitching together schedules, unpredictable weather contingencies, and realistic expense bounds.',
    approach:
      'Built a modern Next.js App Router application backed by PostgreSQL via Prisma ORM. Integrated generative AI prompts structured with strict JSON schemas to generate context-aware daily itineraries, combined with live weather heuristics and budget distribution algorithms.',
    architecture: [
      'Next.js 14 App Router with React Server Components for fast first-contentful paint',
      'Prisma ORM over PostgreSQL with connection pooling and type-safe relational queries',
      'Strict JSON schema validation for deterministic generative AI responses',
      'Client-side responsive state management for real-time drag-and-drop itinerary adjustments',
    ],
    keyDecisions: [
      'Adopted Prisma with PostgreSQL over NoSQL to maintain strict relational integrity across trips, days, activities, and budget ledgers.',
      'Designed a multi-stage prompt pipeline that first estimates travel constraints before populating rich venue recommendations.',
      'Implemented edge-cached destination weather lookups to minimize redundant third-party API latency.',
    ],
    impact:
      'Empowered users to generate complete 7-day personalized trip plans with cost breakdowns in under 8 seconds.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'GenAI', 'Tailwind CSS'],
    github: 'https://github.com/RUTHVIKMATURU',
    metrics: [
      { label: 'Planning Time', value: '< 8s' },
      { label: 'Architecture', value: 'Serverless' },
      { label: 'Type Safety', value: '100% E2E' },
    ],
  },
  {
    id: 'intellivision-ai',
    title: 'IntelliVision-AI',
    subtitle: 'Hardware-Accelerated Real-Time Computer Vision & Scene Captioning Pipeline',
    category: 'AI/ML',
    featured: true,
    year: '2025',
    summary:
      'Sub-millisecond inference engine coupling YOLOv8 object localization on ONNX Runtime with BLIP transformer multi-modal scene captioning over asynchronous FastAPI workers.',
    problem:
      'Running concurrent object detection and natural-language scene understanding on live video feeds typically creates heavy CPU/GPU bottlenecks, dropping frame rates below acceptable real-time thresholds.',
    approach:
      'Exported YOLOv8 weights into ONNX format for hardware-accelerated CPU/GPU tensor execution. Decoupled frame ingestion from deep-learning inference using asynchronous FastAPI workers and WebRTC/WebSocket streaming to achieve low-latency continuous feedback.',
    architecture: [
      'ONNX Runtime execution provider maximizing hardware tensor parallelism',
      'Asynchronous FastAPI REST & WebSocket streaming endpoints',
      'BLIP multi-modal transformer generating context-aware semantic descriptions',
      'High-performance React frontend processing continuous canvas frame rendering',
    ],
    keyDecisions: [
      'Selected ONNX Runtime over raw PyTorch runtime to cut inference overhead by over 40% on standard commodity hardware.',
      'Used decoupled worker queues so object bounding boxes stream at 30+ FPS while heavier transformer captions process on sampled keyframes.',
      'Employed lightweight WebSockets for bidirectional frame metadata transmission.',
    ],
    impact:
      'Delivered smooth 30+ FPS real-time detection with concurrent scene captioning without frame-dropping on live web feeds.',
    tech: ['FastAPI', 'Python', 'ONNX Runtime', 'YOLOv8', 'BLIP Transformers', 'React'],
    github: 'https://github.com/RUTHVIKMATURU/IntelliVision-AI',
    metrics: [
      { label: 'Frame Rate', value: '30+ FPS' },
      { label: 'Inference Backend', value: 'ONNX' },
      { label: 'Latency', value: 'Sub-ms' },
    ],
  },
  {
    id: 'hostel-management-system',
    title: 'Hostel Management Platform',
    subtitle: 'High-Availability Operations & Room Allocation Platform Serving 2,000+ Residents',
    category: 'Full-Stack',
    featured: true,
    year: '2024',
    summary:
      'Production-grade administrative platform streamlining room allocation, fee reconciliation, and grievance ticketing for 2,000+ university hostel residents with JWT Role-Based Access Control.',
    problem:
      'Manual paper registries led to room allocation collisions, untracked fee payment statuses, delayed maintenance response times, and zero operational visibility for wardens.',
    approach:
      'Built a centralized MERN architecture featuring an automated O(1) room allocation mapping algorithm across distributed residential blocks, JWT-based Role-Based Access Control (Student, Warden, Admin), and a real-time occupancy and revenue analytics dashboard.',
    architecture: [
      'Node.js & Express.js REST API with non-blocking event-driven request handling',
      'MongoDB database with compound indexing and optimized connection pooling',
      'JWT authentication with granular Role-Based Access Control (RBAC)',
      'Single-Page Application frontend deployed on Vercel with responsive management panels',
    ],
    keyDecisions: [
      'Engineered an O(1) hash-mapped room availability index to eliminate costly full-table scans during peak allocation windows.',
      'Enforced strict transactional integrity in fee status transitions to avoid duplicate payment verification.',
      'Designed responsive role-specific views so wardens have fast mobile access during physical room inspections.',
    ],
    impact:
      'Actively deployed and serving 2,000+ residents; reduced grievance resolution turnarounds by over 60%.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/RUTHVIKMATURU/hostel-management-system',
    demo: 'https://hostel-management-system-vert.vercel.app/',
    metrics: [
      { label: 'Active Users', value: '2,000+' },
      { label: 'Allocation Alg.', value: 'O(1) Map' },
      { label: 'Uptime', value: 'Production' },
    ],
  },
  {
    id: 'campus-career-connect',
    title: 'PeerConnect / Campus Career Connect',
    subtitle: 'Real-Time Mentorship & Referral Network with WebSocket Connection Pooling',
    category: 'Full-Stack',
    featured: true,
    year: '2024',
    summary:
      'Peer-to-peer networking platform connecting undergraduates with alumni and senior mentors for company-specific interview guidance, referrals, and real-time messaging.',
    problem:
      'Students lack structured avenues to reach verified alumni for interview prep, while seniors receive disorganized LinkedIn DMs without context regarding students’ target domains.',
    approach:
      'Engineered a scalable messaging infrastructure utilizing high-throughput WebSockets for persistent connections, paired with multi-dimensional MongoDB aggregation pipelines that match juniors with relevant mentors based on target tech stacks and company history.',
    architecture: [
      'WebSocket server with persistent connection pooling and heartbeat pinging',
      'MongoDB aggregation pipelines executing multi-criteria user matching',
      'Firebase real-time sync for fallback push notifications and presence states',
      'Tailwind CSS UI with optimistic UI updates for zero-perceived-latency chat',
    ],
    keyDecisions: [
      'Implemented optimistic message dispatching on the client so conversations feel instant even on erratic mobile connections.',
      'Structured mentor profiles with indexed skill vectors to execute fast candidate recommendation queries.',
      'Added JWT session validation directly into the WebSocket handshake phase for ironclad channel security.',
    ],
    impact:
      'Facilitated direct peer-to-peer mentorship pairings and mock interview scheduling across engineering departments.',
    tech: ['MERN Stack', 'WebSockets', 'Firebase', 'JWT', 'MongoDB'],
    github: 'https://github.com/RUTHVIKMATURU/campus-connect',
    metrics: [
      { label: 'Messaging', value: 'Real-Time' },
      { label: 'Protocol', value: 'WebSockets' },
      { label: 'Matching', value: 'Aggregation' },
    ],
  },
];

export const SECONDARY_PROJECTS: Project[] = [
  {
    id: 'event-app',
    title: 'Campus Event Management App',
    subtitle: 'Real-time university event scheduling & RSVP pipeline',
    category: 'Full-Stack',
    featured: false,
    year: '2024',
    summary:
      'Full-stack event discovery and ticketing platform enabling students and organizers to create events, manage live RSVPs, and broadcast notifications.',
    problem: 'Disorganized campus noticeboards caused low participation and last-minute room conflicts.',
    approach: 'Integrated Firebase real-time database with an Express backend for instantaneous RSVP synchronization and push alerts.',
    architecture: ['React UI', 'Node/Express API', 'Firebase Realtime DB'],
    keyDecisions: ['Used Firebase real-time listeners for live attendee capacity counters.'],
    impact: 'Streamlined event registrations across college technical fests.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Firebase'],
    github: 'https://github.com/RUTHVIKMATURU/eventApp',
  },
  {
    id: 'blog-app',
    title: 'Content & Tech Blogging Platform',
    subtitle: 'Rich-text publishing with real-time comments & SEO routing',
    category: 'Full-Stack',
    featured: false,
    year: '2024',
    summary:
      'Modern publishing platform featuring rich-text authoring, dynamic SEO meta tag generation, and real-time reader interaction threads.',
    problem: 'Monolithic content systems are bulky and difficult to customize for developer tutorials with embedded code snippets.',
    approach: 'Developed a custom markdown-friendly editor connected to a scalable MongoDB document store.',
    architecture: ['React', 'Express', 'MongoDB', 'JWT'],
    keyDecisions: ['Engineered slug-based routing with server-rendered meta tags for search discoverability.'],
    impact: 'Provided a seamless writing platform for university tech club publications.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/RUTHVIKMATURU/BlogApp',
  },
  {
    id: 'movie-matrix-dbms',
    title: 'Movie Matrix Relational DBMS',
    subtitle: '3NF normalized database engine with complex analytical queries',
    category: 'Systems & DBMS',
    featured: false,
    year: '2024',
    summary:
      'Relational database architecture managing extensive multi-table media catalogs with Third Normal Form (3NF) normalization, B-tree indexes, and complex analytical SQL joins.',
    problem: 'Poorly structured denormalized databases suffer from update anomalies, data redundancy, and sluggish multi-join reports.',
    approach: 'Engineered a clean 3NF relational schema and created stored procedures, triggers, and query-optimized composite indexes.',
    architecture: ['MySQL Relational Engine', '3NF Normalized Schema', 'Custom SQL Indexing'],
    keyDecisions: ['Applied composite B-tree indexes on high-frequency filtering columns to reduce query plan execution times.'],
    impact: 'Demonstrated deep database design fundamentals and transactional consistency.',
    tech: ['SQL', 'MySQL', 'Database Architecture', 'Performance Tuning'],
    github: 'https://github.com/RUTHVIKMATURU',
  },
  {
    id: 'course-registration-app',
    title: 'Course Registration Desktop System',
    subtitle: 'Event-driven desktop client with JDBC transaction safety',
    category: 'Desktop',
    featured: false,
    year: '2023',
    summary:
      'High-integrity desktop application built with pure Java AWT and JDBC, implementing ACID-compliant transaction controls for concurrent course enrollments.',
    problem: 'Race conditions during simultaneous student enrollments in capped-seat electives led to over-registration.',
    approach: 'Designed an event-driven Java GUI backed by strict SQL transactions with rollback safety in JDBC.',
    architecture: ['Java AWT GUI', 'JDBC Driver', 'MySQL Transaction Engine'],
    keyDecisions: ['Enforced pessimistic concurrency locking at the database level during seat increment operations.'],
    impact: 'Solidified core Object-Oriented Programming, GUI event loops, and database concurrency management principles.',
    tech: ['Java', 'AWT', 'JDBC', 'MySQL', 'OOP Design'],
    github: 'https://github.com/RUTHVIKMATURU/javaAWT',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Languages',
    iconName: 'Code2',
    description: 'Languages used for deep algorithmic problem solving and low-latency system design.',
    skills: [
      { name: 'C++', level: 'Advanced', context: 'Competitive Programming, STL, Memory & Complexity' },
      { name: 'Java', level: 'Advanced', context: 'OOP, Collections, JDBC, Desktop & Backend' },
      { name: 'Python', level: 'Advanced', context: 'FastAPI, PyTorch/ONNX, Automation, Scripting' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', context: 'Modern Async Patterns, Node.js, V8 Internals' },
      { name: 'TypeScript', level: 'Proficient', context: 'Type-Safe End-to-End Web Architectures' },
      { name: 'SQL', level: 'Advanced', context: 'Complex Joins, 3NF Normalization, Index Tuning' },
      { name: 'C', level: 'Proficient', context: 'Pointers, Memory Allocation, Systems Fundamentals' },
    ],
  },
  {
    title: 'Backend & Systems Engineering',
    iconName: 'Server',
    description: 'Architecting high-throughput, non-blocking APIs and microservices.',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', context: 'REST APIs, Middleware, Scaled 2000+ Users' },
      { name: 'FastAPI', level: 'Advanced', context: 'Asynchronous Python, Pydantic, ML Inference' },
      { name: 'WebSockets', level: 'Proficient', context: 'Real-time Bidirectional Feeds & Pooling' },
      { name: 'RESTful API Design', level: 'Advanced', context: 'Idempotency, Pagination, Error Handling' },
      { name: 'JWT & RBAC Security', level: 'Advanced', context: 'Stateless Auth, Role-Based Access Control' },
      { name: 'Flask', level: 'Proficient', context: 'Microservices & Quick Service Mocking' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    iconName: 'Cpu',
    description: 'Practical deployment of computer vision and transformer models.',
    skills: [
      { name: 'ONNX Runtime', level: 'Proficient', context: 'Sub-millisecond Model Acceleration' },
      { name: 'YOLOv8', level: 'Advanced', context: 'Real-Time Object Detection & Localization' },
      { name: 'BLIP Transformers', level: 'Proficient', context: 'Multi-Modal Scene Captioning' },
      { name: 'TensorFlow & Keras', level: 'Proficient', context: 'Neural Network Training & Fine-Tuning' },
      { name: 'Scikit-learn', level: 'Advanced', context: 'Classical ML, Regressors, Classifiers' },
      { name: 'OpenCV', level: 'Advanced', context: 'Frame Processing, Image Manipulations' },
    ],
  },
  {
    title: 'Databases & Data Infrastructure',
    iconName: 'Database',
    description: 'Relational integrity and scalable document stores.',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient', context: 'ACID Transactions, Relational Modeling' },
      { name: 'MongoDB', level: 'Advanced', context: 'Aggregation Pipelines, Schema Indexing' },
      { name: 'Prisma ORM', level: 'Proficient', context: 'Type-Safe DB Client, Schema Migrations' },
      { name: 'MySQL', level: 'Advanced', context: 'Stored Procedures, Triggers, 3NF Normalization' },
      { name: 'Firebase Firestore', level: 'Proficient', context: 'Real-Time Data Sync & Auth' },
    ],
  },
  {
    title: 'Modern Frontend Architecture',
    iconName: 'Layers',
    description: 'Clean, accessible, responsive user experiences.',
    skills: [
      { name: 'React.js', level: 'Advanced', context: 'Custom Hooks, Context, Component Design' },
      { name: 'Next.js 14', level: 'Proficient', context: 'App Router, Server Components, SSR/SSG' },
      { name: 'Tailwind CSS', level: 'Advanced', context: 'Design Systems, Fluid Typography' },
      { name: 'HTML5 & CSS3', level: 'Advanced', context: 'Semantic Web, Accessibility, Keyframes' },
      { name: 'Framer Motion', level: 'Proficient', context: 'Micro-Interactions, Layout Transitions' },
    ],
  },
  {
    title: 'DevOps, Cloud & Tooling',
    iconName: 'Wrench',
    description: 'Deployment pipelines, cloud infrastructure, and developer velocity.',
    skills: [
      { name: 'Google Cloud (GCP)', level: 'Proficient', context: 'Compute Engine, Cloud Storage, IAM' },
      { name: 'Docker', level: 'Proficient', context: 'Containerization, Reproducible Builds' },
      { name: 'Git & GitHub', level: 'Advanced', context: 'Branching Strategies, CI/CD Actions' },
      { name: 'Postman', level: 'Advanced', context: 'API Testing Suites & Mock Servers' },
      { name: 'Tableau & Power BI', level: 'Proficient', context: 'Data Analytics & Executive Dashboards' },
      { name: 'Linux / Bash', level: 'Proficient', context: 'Command-Line Navigation, Scripting' },
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'mercor-writer',
    role: 'Competitive Coding Writer',
    organization: 'Mercor',
    period: 'Nov 2025 – Feb 2026',
    location: 'Remote',
    type: 'Work',
    badge: 'Competitive Programming & Systems Rigor',
    description:
      'Engineered and author-reviewed complex competitive programming challenges for international developer assessment benchmarks.',
    highlights: [
      'Architected original algorithmic problem statements spanning advanced Graph Theory, Dynamic Programming, Segment Trees, and Disjoint Set Union.',
      'Authored rigorous editorial analyses containing mathematical proofs, time/space complexity derivations, and optimal approach trade-offs.',
      'Designed exhaustive automated test suites stressing boundary conditions and edge cases up to 10^5 constraints without TLE or MLE anomalies.',
    ],
    skills: ['C++', 'Data Structures', 'Graph Theory', 'Dynamic Programming', 'Complexity Proofs'],
    stats: [
      { label: 'Rating Tier', value: 'Guardian' },
      { label: 'Constraint Limit', value: '10^5' },
      { label: 'Domain', value: 'Advanced DSA' },
    ],
  },
  {
    id: 'iste-tech-head',
    role: 'Technical Head',
    organization: 'ISTE VNRVJIET',
    period: '2025 – Present',
    location: 'Hyderabad, India',
    type: 'Leadership',
    badge: 'Leadership & Community Direction',
    description:
      'Leading the technical vision and engineering syllabus for one of the premier student-led technical organizations on campus.',
    highlights: [
      'Organized and instructed 12+ hands-on workshops across AI/ML, Full-Stack Web Development, Git workflows, and C++ fundamentals.',
      'Provided direct technical troubleshooting and 1-on-1 mentorship for 500+ student participants, sustaining a 95% workshop completion rate.',
      'Spearheaded the technical architecture of 35+ collaborative student projects and guided multiple hackathon-winning teams.',
    ],
    skills: ['Technical Leadership', 'Curriculum Design', 'Public Speaking', 'Code Review', 'Mentorship'],
    stats: [
      { label: 'Engineers Mentored', value: '500+' },
      { label: 'Workshops Led', value: '12+' },
      { label: 'Projects Guided', value: '35+' },
    ],
  },
  {
    id: 'vnrvjiet-academic',
    role: 'B.Tech in Computer Science & Engineering (AI & ML)',
    organization: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    period: 'Sep 2023 – Expected May 2027',
    location: 'Hyderabad, India',
    type: 'Education',
    badge: 'Academic Excellence (9.14 GPA)',
    description:
      'Pursuing an intensive undergraduate curriculum bridging foundational computer science theory with modern machine learning applications.',
    highlights: [
      'Maintaining a top-tier cumulative GPA of 9.14 while actively competing in national competitive programming contests.',
      'Completed rigorous foundational courses in Operating Systems, Algorithm Analysis, Distributed DBMS, and Artificial Intelligence.',
      'Consistently ranked on the departmental honor board for academic excellence and technical competition performance.',
    ],
    skills: ['Algorithms', 'Operating Systems', 'DBMS', 'Machine Learning', 'Computer Networks'],
    stats: [
      { label: 'GPA', value: '9.14' },
      { label: 'Focus', value: 'AI & ML' },
      { label: 'Expected Grad', value: 'May 2027' },
    ],
  },
];

export const COMPETITIVE_PROFILES: CompetitiveProfile[] = [
  {
    platform: 'LeetCode',
    username: 'ruthvik0811',
    handleUrl: 'https://leetcode.com/u/ruthvik0811',
    badge: 'Guardian',
    rating: 2268,
    maxRating: 2268,
    solved: 350,
    percentileOrRank: 'Top ~1% Globally',
    accentColor: 'from-amber-500 to-orange-600',
    highlights: [
      'Guardian badge holder (Peak rating: 2268)',
      'Consistent top performer across global weekly & biweekly contests',
      'Specialized in complex dynamic programming and graph algorithms',
    ],
  },
  {
    platform: 'CodeChef',
    username: 'ruthvik0811',
    handleUrl: 'https://codechef.com/users/ruthvik0811',
    badge: '4-Star',
    rating: 1839,
    maxRating: 1839,
    solved: 500,
    percentileOrRank: 'Division 1 / 4-Star Tier',
    accentColor: 'from-purple-500 to-indigo-600',
    highlights: [
      '4-Star Coder with a maximum rating of 1839',
      '500+ problems solved across monthly Starters and Cook-Offs',
      'High speed in implementation-heavy and number-theory challenges',
    ],
  },
  {
    platform: 'Codeforces',
    username: 'ruthvik0811',
    handleUrl: 'https://codeforces.com/profile/ruthvik0811',
    badge: 'Specialist',
    rating: 1499,
    maxRating: 1499,
    solved: 350,
    percentileOrRank: 'Specialist Tier',
    accentColor: 'from-cyan-500 to-blue-600',
    highlights: [
      'Specialist ranking with a peak rating of 1499',
      'Strong accuracy under high-stress Div. 2 timed contest formats',
      'Expertise in greedy paradigms, binary search variations, and combinatorics',
    ],
  },
  {
    platform: 'GitHub',
    username: 'RUTHVIKMATURU',
    handleUrl: 'https://github.com/RUTHVIKMATURU',
    badge: 'Open Source',
    rating: 0,
    maxRating: 0,
    solved: 25,
    percentileOrRank: 'Active Contributor',
    accentColor: 'from-emerald-500 to-teal-600',
    highlights: [
      'Full-stack and AI repositories with complete architectural documentation',
      'Production codebases supporting thousands of live users',
      'Clean Git commit history and modular repository organization',
    ],
  },
];

export const CONTEST_HONORS: ContestHonor[] = [
  {
    title: 'Smart Interviews Leaderboard',
    position: 'AIR 17 & Campus Rank 1',
    organizer: 'Smart Interviews',
    scope: 'National',
    year: '2024',
    badge: 'All India Rank 17',
    description:
      'Secured All India Rank 17 and ranked 1st overall across the entire university campus in a high-intensity problem-solving contest involving 500+ top collegiate coders.',
  },
  {
    title: 'Codeverse 2k25',
    position: '2nd Rank (Podium)',
    organizer: 'Turing Hut',
    scope: 'Campus',
    year: '2025',
    badge: '2nd Place Trophy',
    description:
      'Achieved 2nd place podium finish in a multi-stage competitive programming championship focusing on advanced data structures, graph theory, and mathematical optimization.',
  },
  {
    title: 'ICPC-Style Coding Contest',
    position: '2nd Place',
    organizer: 'VNRVJIET',
    scope: 'Campus',
    year: '2024',
    badge: '2nd Place',
    description:
      'Secured 2nd position in a strict ACM-ICPC timed contest format requiring rapid algorithmic debugging and minimal submission penalties.',
  },
  {
    title: 'Top 100 Coders 2k25',
    position: '11th Rank',
    organizer: 'Krithomedh',
    scope: 'Inter-College',
    year: '2025',
    badge: 'Top 1% Rank',
    description:
      'Ranked 11th out of hundreds of elite undergraduate competitors, improving on previous year standing through advanced optimization and speed.',
  },
  {
    title: 'Turing Cup 2k25',
    position: '12th Rank',
    organizer: 'Inter-College Championship',
    scope: 'Inter-College',
    year: '2025',
    badge: 'Top Tier Finalist',
    description:
      'Distinguished top-15 performance in a prestigious inter-college contest featuring high-constraint dynamic programming and tree decomposition problems.',
  },
  {
    title: 'IICPC CodeFest Prelims',
    position: 'AIR 1712',
    organizer: 'IICPC India',
    scope: 'National',
    year: '2024',
    badge: 'National Finalist',
    description:
      'Ranked among the top nationwide in the national prelims of the Indian Inter-Collegiate Programming Contest.',
  },
];

export const VERIFIED_CERTIFICATIONS: Certificate[] = [
  {
    id: 'google-cloud',
    title: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud Skills Boost',
    issueDate: '2024',
    credentialId: 'GC-BOOST-2024-SRV',
    category: 'Cloud',
    image: '/certificates/GoogleCloud.png',
    skills: ['GCP Infrastructure', 'Compute Engine', 'IAM Security', 'Cloud Storage'],
    description:
      'Hands-on cloud architecture certification verifying practical infrastructure setup, IAM role security, and distributed storage management on Google Cloud Platform.',
  },
  {
    id: 'smart-interviews-top',
    title: '1st Place Smart Interviews Excellence',
    issuer: 'Smart Interviews',
    issueDate: '2024',
    credentialId: 'SI-TOP-2024-VNR',
    category: 'Algorithms',
    image: '/certificates/smartInterviews.png',
    skills: ['Advanced Data Structures', 'Algorithms', 'Competitive Programming'],
    description:
      'Honored as the #1 Top Performer on the campus leaderboard in advanced algorithmic problem solving and data structure optimization.',
  },
  {
    id: 'mern-stack-vnr',
    title: 'MERN Stack Enterprise Development',
    issuer: 'VNRVJIET',
    issueDate: '2024',
    credentialId: 'VNR-MERN-2024-102',
    category: 'Development',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
    description:
      'Comprehensive full-stack engineering certification covering scalable RESTful backend design, schema normalization, and production state management.',
  },
  {
    id: 'codeverse-podium',
    title: 'Codeverse 2k25 Podium Recognition',
    issuer: 'Turing Hut',
    issueDate: '2025',
    credentialId: 'TH-CV-2025-02',
    category: 'Algorithms',
    image: '/certificates/Codeverse.jpg',
    skills: ['Competitive Programming', 'Graph Theory', 'Dynamic Programming'],
    description:
      'Official credential for 2nd Rank in the annual inter-departmental coding championship organized by Turing Hut.',
  },
  {
    id: 'turing-cup',
    title: 'Turing Cup 2k25 Finalist',
    issuer: 'Inter College Technical Committee',
    issueDate: '2025',
    credentialId: 'TC-2K25-VNR',
    category: 'Algorithms',
    image: '/certificates/TuringCup2k25.png',
    skills: ['Speed Coding', 'Advanced DSA', 'Stress Testing'],
    description:
      'Rank 12 certificate for elite performance in the Turing Cup algorithmic challenge.',
  },
  {
    id: 'codenox-award',
    title: 'CodeNox 2.0 Competition',
    issuer: 'Technical Society',
    issueDate: '2024',
    credentialId: 'CDNX-2024-VNR',
    category: 'Algorithms',
    image: '/certificates/CodeNox_2.0.jpg',
    skills: ['Algorithmic Logic', 'Debugging', 'Optimization'],
    description:
      'Recognition for outstanding algorithmic debugging and rapid problem solving.',
  },
];

export const ENGINEERING_PHILOSOPHY = {
  quote:
    'Great engineering happens when mathematical rigor meets pragmatic product execution.',
  principles: [
    {
      title: 'Asymptotic Discipline First',
      description:
        'A system built on O(N^2) bottlenecks cannot be saved by throwing bigger cloud instances at it. I design every data structure and database query with strict asymptotic bounds.',
    },
    {
      title: 'Zero Unnecessary Abstraction',
      description:
        'Complexity is the silent killer of maintainability. I build modular, predictable systems with direct, readable patterns rather than wrapping code in five layers of indirection.',
    },
    {
      title: 'Edge-Case Defense by Default',
      description:
        'Having authored contest-grade stress suites with 10^5 constraints for Mercor, I proactively anticipate empty inputs, null pointers, race conditions, and concurrency deadlocks before they hit production.',
    },
    {
      title: 'Measure, Don’t Guess',
      description:
        'Optimization without telemetry is superstition. Whether profiling Python ONNX tensor execution or indexing MongoDB collections, engineering decisions should be guided by benchmarked metrics.',
    },
  ],
  currentExplorations: [
    {
      topic: 'Low-Latency ML Inference',
      detail: 'Benchmarking ONNX Runtime and TensorRT pipelines for sub-millisecond edge video comprehension.',
    },
    {
      topic: 'Distributed State Synchronization',
      detail: 'Exploring CRDTs and WebSocket connection pooling strategies for real-time collaborative platforms.',
    },
    {
      topic: 'High-Concurrency Backend Systems',
      detail: 'Studying Go and Rust memory-safe concurrency primitives to complement my Node.js and FastAPI stack.',
    },
  ],
};
