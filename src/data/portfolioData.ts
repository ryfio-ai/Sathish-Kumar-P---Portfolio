import { Project, Experience, SkillGroup, Achievement, Certification } from '../types';

export const profile = {
  name: 'Sathish Kumar P',
  title: 'Full Stack Developer | AI Product Developer | Adaptive AI Agents Enthusiast',
  location: 'Tamil Nadu, India',
  email: 'sathishpandiyan126@gmail.com',
  phone: '+91 96294 63964',
  linkedin: 'https://linkedin.com/in/sathishkumarp126',
  github: 'https://github.com/sathish126',
  githubOrg: 'https://github.com/ryfio-ai',
  status: 'Available for Internship / Full-time Roles',
  bio: 'I am a Production Engineering student at PSG College of Technology with hands-on experience in full stack development, AI-assisted product development, adaptive AI agents, dashboards, and startup MVP development. I enjoy converting ideas into real-world applications using React, TypeScript, APIs, databases, AI tools, and modern product workflows.',
  aboutHighlights: [
    { title: 'AI Product Development', desc: 'Integrating LLMs, prompt engineering, and agentic workflows into production web apps.' },
    { title: 'Full Stack Engineering', desc: 'Building responsive frontends and robust API integrations with complete database syncing.' },
    { title: 'Startup MVP Building', desc: 'Turning product concepts into functional, launchable MVPs at extreme velocity.' },
    { title: 'Adaptive AI Agents', desc: 'Designing state-aware agentic systems for automation and interactive tools.' },
    { title: 'Dashboards & Automation', desc: 'Creating clean dashboard interfaces to monitor real-time metrics and sensor feeds.' },
    { title: 'API & Database Integration', desc: 'Connecting FastAPI, Node.js, and Supabase backend stacks with relational databases.' }
  ]
};

export const whyHireMe = [
  {
    title: 'Fast MVP Builder',
    description: 'Rapid prototyping from wireframe to interactive deployment in days, enabling swift validation of product ideas.'
  },
  {
    title: 'Strong Frontend Execution',
    description: 'Specialized in React, TypeScript, Tailwind CSS, and Framer Motion to craft high-fidelity, high-performance interfaces.'
  },
  {
    title: 'AI-Assisted Dev Workflow',
    description: 'Leveraging cutting-edge AI tools (Cursor, Lovable, Bolt, LLMs) to speed up code output and structural design while ensuring quality.'
  },
  {
    title: 'API & Database Integration',
    description: 'Experienced in connecting client-side apps with FastAPI, REST endpoints, Supabase, and SQL/NoSQL databases.'
  },
  {
    title: 'Real-World Project Experience',
    description: 'Delivered industrial products like Modliq, corporate systems like eDrift, and campus platforms like Kriya Techfest.'
  },
  {
    title: 'Leadership in Tech Teams',
    description: 'Led frontend engineers for major tech festivals and managed laboratory resource operations at PSG Tech.'
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Member Technical Staff Intern',
    company: 'Haiva Software Pvt Ltd',
    duration: 'Jan 2026 – Mar 2026',
    description: 'Developed and contributed to Adaptive AI Agent solutions for the Haiva platform, building interactive interfaces and optimizing workflows.',
    bulletPoints: [
      'Developed and contributed to Adaptive AI Agent solutions for the Haiva platform.',
      'Contributed to workflow automation, performance dashboard building, UI development, and API integrations.',
      'Collaborated with cross-functional teams, took ownership of assigned tasks, and delivered work within timelines.'
    ]
  },
  {
    id: 'exp2',
    role: 'Freelance Full Stack Developer',
    company: 'eDrift Electric Pvt. Ltd.',
    duration: 'Mar 2026 – May 2026',
    description: 'Designed, developed, and maintained the complete corporate web assets for eDrift Electric, a pioneer EV power electronics company.',
    bulletPoints: [
      'Designed, developed, and maintained the complete corporate website for eDrift Electric, an EV power electronics company.',
      'Built responsive user interfaces, product pages, company profile pages, and contact workflows to improve user engagement and lead generation.',
      'Implemented modern frontend development practices with a focus on performance, responsiveness, SEO, and user experience.',
      'Collaborated directly with founders and engineering teams to translate business requirements into production-ready web solutions.',
      'Managed website deployment, updates, content integration, and ongoing maintenance throughout the project lifecycle.'
    ]
  },
  {
    id: 'exp3',
    role: 'Frontend Lead',
    company: 'Kriya Techfest, PSG College of Technology',
    duration: 'June 2025 – May 2026',
    description: 'Led the development team responsible for building the official Kriya 2025 and 2026 techfest portal serving thousands of participants.',
    bulletPoints: [
      'Led the frontend engineering team responsible for developing and maintaining the official Kriya 2025 and Kriya 2026 techfest websites.',
      'Built scalable and responsive web interfaces, improving participant onboarding, event discovery, and registration workflows.',
      'Implemented modern UI/UX practices and collaborated with cross-functional teams to deliver production-ready web applications.',
      'Managed deployment, testing, performance optimization, and feature enhancements for the Kriya technical festival websites.'
    ]
  },
  {
    id: 'exp4',
    role: 'Head',
    company: 'Open Learning Laboratory, PSG College of Technology',
    duration: 'Jun 2025 – May 2026',
    description: 'Managed laboratory resources, guided robotics projects, and supported technical event preparation.',
    bulletPoints: [
      'Managed lab resources and supported student technical projects in robotics, automation, and product development.',
      'Guided students in building practical projects and participating in technical events.'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'proj-modliq',
    name: 'Modliq',
    url: '#',
    githubUrl: 'https://github.com/ryfio-ai',
    categories: ['AI/ML', 'Product', 'Full Stack'],
    description: 'No-code Machine Learning platform designed to help users build, train, evaluate, and deploy machine learning models without writing code.',
    features: [
      'Dataset upload (CSV/JSON)',
      'Data preprocessing & cleaning tools',
      'Model selection (Regression, Classification)',
      'Visual training workflow & epoch indicators',
      'Detailed model evaluation (Accuracy, ROC, Precision)',
      'Interactive prediction interface',
      'Dashboard workflow with step progress indicators',
      'AI-assisted model recommendations',
      'Exportable models and summary results',
      'Beginner-friendly no-code wizard experience'
    ]
  },
  {
    id: 'proj-thiranoli',
    name: 'ThiranOli',
    url: 'https://www.thiranoli.com',
    categories: ['Full Stack', 'Product', 'EdTech', 'Web'],
    description: 'Doorstep EdTech platform with role-based access for students, trainers, and admins. Supports course discovery, course creation, trainer verification, payments, dashboard controls, and learning trackers.',
    features: [
      'Student registration and dashboard',
      'Trainer registration and verification workflow',
      'Admin dashboard',
      'Course management',
      'Demo booking flow',
      'Payment workflow',
      'Learning paths',
      'Mentor/trainer listing',
      'Responsive UI',
      'Scalable product architecture'
    ],
    badges: ['Current Major Work', 'Full Stack EdTech Product', 'Live Product'],
    featured: true,
    caseStudy: {
      problem: 'Students and parents need trusted, accessible, and structured learning support with verified trainers and clear course workflows.',
      solution: 'Built ThiranOli as a modern EdTech platform with student, trainer, and admin role-based workflows.',
      keyFeatures: [
        'Student registration and dashboard',
        'Trainer registration and verification workflow',
        'Admin dashboard',
        'Course management',
        'Demo booking flow',
        'Payment workflow',
        'Learning paths',
        'Mentor/trainer listing',
        'Responsive UI',
        'Scalable product architecture'
      ],
      myContribution: 'I worked on full-stack product planning, frontend development, UI/UX structure, dashboard workflows, authentication flow planning, product feature architecture, deployment, and continuous platform improvement.',
      impact: 'ThiranOli represents my ability to build a real startup product from idea to production with practical user flows, scalable features, and product-focused execution.'
    }
  },
  {
    id: 'proj-edrift',
    name: 'eDrift Electric',
    url: 'https://www.edriftelectric.com',
    categories: ['Web', 'Full Stack'],
    description: 'Corporate portal for eDrift Electric (EV power electronics company). Offers detailed product showcase pages, company profiling, lead captures, and SEO setups.',
    features: [
      'Ultra-responsive specifications sheets',
      'Company product line custom layout grids',
      'Lead capture forms and contact mail triggers',
      'SEO audit-friendly structure with custom meta tags',
      'Sleek modern styling with EV industrial accents'
    ]
  },
  {
    id: 'proj-tamizhtech',
    name: 'Tamizh Tech Robotics',
    url: 'https://www.tamizhtech.in',
    categories: ['Web', 'Product', 'Robotics'],
    description: 'Official portal for Tamizh Tech Robotics showcasing structural products, training programs, national robotics competitions, and brand innovations.',
    features: [
      'Animated showcase of industrial and competition robots',
      'Interactive registration for workshops and camps',
      'Visual timeline of competitions and tech forums',
      'Product gallery with details and booking forms'
    ]
  },
  {
    id: 'proj-tracking',
    name: 'PSG Lab Equipment Tracking System',
    url: '#',
    categories: ['Full Stack', 'Product'],
    description: 'Inventory and tracking dashboard for college laboratory hardware and resources. Restricts actions using granular role-based permissions.',
    features: [
      'Role-based logins for Principal, HOD, and Lab Assistants',
      'Real-time equipment allocation and check-out tracking',
      'Automated stock levels alerts & deficit indicators',
      'Interactive PDF/Excel reports extraction by department'
    ]
  },
  {
    id: 'proj-shipment',
    name: 'Shipment Delay Prediction using ML',
    url: '#',
    categories: ['AI/ML'],
    description: 'Machine learning regression and classification project built to analyze supply chain shipping datasets and predict delay margins.',
    features: [
      'Feature engineering with shipping logs and transport modes',
      'Dataset cleansing, NaN interpolation, and outlier handling',
      'Model training with Decision Trees, Linear Regression, and Random Forest',
      'Evaluation metrics summary showing Random Forest superiority'
    ]
  },
  {
    id: 'proj-fdm',
    name: 'FDM Process Parameter Optimization using ML',
    url: '#',
    categories: ['AI/ML'],
    description: 'Research project utilizing multi-objective ML models to optimize FDM 3D printing parameters for optimal surface finish and tensile strength.',
    features: [
      'Designed experiments using Response Surface Methodology (RSM-CCD)',
      'CAD modeling and test print parameters dataset formulation',
      'Multi-objective optimization validation to find Pareto optimal coordinates'
    ]
  },
  {
    id: 'proj-digitaltwin',
    name: 'Digital Twin for Raw Material Traceability',
    url: '#',
    categories: ['AI/ML', 'Product'],
    description: 'Dashboard-based digital twin mockup to track industrial supply flows, process metrics, and sensor signals in real-time.',
    features: [
      'Dynamic charts showing mock sensor telemetry (temperature, flow)',
      'Interactive manufacturing plant layout map overlays',
      'OEE and process performance gauge charts'
    ]
  }
];

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion', 'Responsive Design']
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Node.js', 'REST APIs', 'Supabase Auth', 'API Integration', 'Authentication']
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'Supabase DB', 'MySQL', 'SQL']
  },
  {
    category: 'AI & Machine Learning',
    skills: ['Adaptive AI Agents', 'LLM Integration', 'Prompt Engineering', 'Scikit-Learn', 'Pandas', 'NumPy', 'Random Forest', 'Decision Trees', 'Agentic Workflows']
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Google Colab', 'Cursor', 'GitHub Copilot', 'Lovable', 'Bolt.new', 'ChatGPT']
  },
  {
    category: 'Deployment & Platforms',
    skills: ['Vercel', 'Supabase', 'GitHub Pages', 'Google Workspace']
  }
];

export const achievements: Achievement[] = [
  {
    id: 'ach-rpl',
    title: 'First Position in Robot Premier League 2023',
    description: 'Won the championship trophy in the flagship robot design-and-battle competition organized by the Open Learning Laboratory.'
  },
  {
    id: 'ach-robosumo',
    title: 'First Position in ROBOSUMO @ ROBOGLITZ 2K24',
    description: 'Designed and fabricated an autonomous combat robot that clinched first place at the national-level symposium.'
  },
  {
    id: 'ach-raceto',
    title: 'Second Position in Race to Scan @ ROBOGLITZ\'25',
    description: 'Built a custom optical scanning robot targeting quick maze mapping.'
  },
  {
    id: 'ach-techno',
    title: 'Runner-up in TECHNOMAZE @ Srishti 2K24',
    description: 'Developed an autonomous maze solver micro-mouse that placed second overall.'
  },
  {
    id: 'ach-evade',
    title: 'Second Position in Robo Evade @ PRODOTHON\'25',
    description: 'Engineered a sensor-guided obstacle avoidance robot for rapid trials.'
  },
  {
    id: 'ach-shaastra',
    title: 'Participated in robotics events at Shaastra, IIT Madras',
    description: 'Represented PSG College of Technology in multiple autonomous robotics events at IIT Madras.'
  },
  {
    id: 'ach-robocon',
    title: 'Contributed to DD-Robocon 2024 robots',
    description: 'Helped design, fabricate, and test mechanical and driver circuits for two robots representing PSG Tech at the prestigious national Robocon event in Delhi.'
  },
  {
    id: 'ach-lead',
    title: 'Frontend Lead for Kriya Techfest websites',
    description: 'Managed site design, developer coordination, and release engineering for official campus techfest sites serving 5000+ applicants.'
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-ml',
    title: 'Machine Learning A–Z: AI, Python and R',
    issuer: 'Udemy',
    date: 'Ongoing'
  },
  {
    id: 'cert-fe',
    title: 'Introduction to Frontend Development',
    issuer: 'Meta via Coursera',
    date: 'March 2024'
  },
  {
    id: 'cert-sec',
    title: 'Foundations of Cybersecurity',
    issuer: 'Google via Coursera',
    date: 'February 2024'
  }
];
