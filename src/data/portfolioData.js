export const portfolioData = {
  personal: {
    name: "Anugrah Patil",
    firstName: "Anugrah",
    lastName: "Patil",
    role: "Full Stack Developer",
    secondaryRole: "AI/ML Enthusiast",
    title: "Full Stack Developer | AI/ML Enthusiast",
    tagline: "Building intelligent software systems & modern full-stack web solutions.",
    bioShort: "I am a passionate developer who enjoys building full-stack applications, exploring Artificial Intelligence and Machine Learning, and solving programming problems. I enjoy turning ideas into practical software solutions while continuously improving my technical skills.",
    aboutDetailed: "I am a passionate developer interested in Full Stack Development, Artificial Intelligence, Machine Learning, and Deep Learning. I enjoy building practical software solutions, improving my programming logic, and learning technologies that can solve real-world problems.",
    profileImage: "/assets/anugrah-patil.jpg",
    email: "anugrahpatil0@gmail.com",
    badgeText: "Available for Projects & Internships"
  },

  social: {
    github: "https://github.com/anugrahpatil-creator",
    linkedin: "https://www.linkedin.com/in/anugrah-patil-baba4a377",
    leetcode: "https://leetcode.com/u/AnugrahPatil19/",
    email: "mailto:anugrahpatil0@gmail.com"
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],

  aboutHighlights: [
    {
      id: "01",
      title: "Full Stack Development",
      description: "Building responsive, modern and functional web applications from end to end."
    },
    {
      id: "02",
      title: "AI & Machine Learning",
      description: "Exploring intelligent systems, predictive algorithms, and neural networks."
    },
    {
      id: "03",
      title: "Problem Solving",
      description: "Improving programming logic through Data Structures and algorithmic analysis."
    },
    {
      id: "04",
      title: "Software Development",
      description: "Turning complex real-world challenges into structured, scalable software solutions."
    }
  ],

  services: [
    {
      id: "01",
      title: "Full Stack Development",
      description: "Building responsive and functional web applications with clean architecture and modern user interfaces.",
      icon: "Layers"
    },
    {
      id: "02",
      title: "Python Development",
      description: "Developing applications, backend systems, APIs, and automation workflows using Python.",
      icon: "Code2"
    },
    {
      id: "03",
      title: "Machine Learning",
      description: "Building and exploring Machine Learning solutions for practical real-world prediction and analysis problems.",
      icon: "Cpu"
    },
    {
      id: "04",
      title: "Deep Learning",
      description: "Exploring neural networks, feature representations, and Deep Learning techniques.",
      icon: "BrainCircuit"
    },
    {
      id: "05",
      title: "AI/ML",
      description: "Exploring Artificial Intelligence concepts, data processing pipelines, and intelligent software systems.",
      icon: "Sparkles"
    },
    {
      id: "06",
      title: "Problem Solving",
      description: "Improving programming logic, efficient algorithms, and structured algorithmic problem solving.",
      icon: "Terminal"
    }
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", highlight: true },
        { name: "C", highlight: false },
        { name: "C++", highlight: false }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Artificial Intelligence", highlight: true },
        { name: "Machine Learning", highlight: true },
        { name: "Deep Learning", highlight: true },
        { name: "AI/ML", highlight: false },
        { name: "NumPy", highlight: false },
        { name: "Pandas", highlight: false },
        { name: "Data Analysis", highlight: false }
      ]
    },
    {
      category: "Web & Full Stack",
      skills: [
        { name: "Full Stack Development", highlight: true },
        { name: "Web Development", highlight: false },
        { name: "Flask", highlight: true },
        { name: "REST APIs", highlight: false },
        { name: "HTML", highlight: false },
        { name: "CSS", highlight: false },
        { name: "JavaScript", highlight: false }
      ]
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git", highlight: false },
        { name: "GitHub", highlight: true },
        { name: "VS Code", highlight: false }
      ]
    }
  ],

  resumeTabs: {
    biography: {
      headline: "Passionate Full Stack Developer & AI/ML Explorer",
      summary: "I am a dedicated software developer focusing on modern web engineering, data analysis, and machine learning models. I take pride in creating clean, maintainable software and building practical tools that make complex tasks effortless.",
      points: [
        { label: "Focus Areas", value: "Full Stack Development, Machine Learning, AI Applications" },
        { label: "Core Languages", value: "Python, C, C++, JavaScript" },
        { label: "Philosophy", value: "Continuous learning, pragmatic engineering, clean architecture" },
        { label: "Collaboration", value: "Open source contributions, team projects, hackathons" }
      ]
    },
    skills: {
      summary: "Strong foundation in computational logic, object-oriented programming, data science libraries, web frameworks, and version control.",
      categories: [
        { title: "Languages", items: ["Python", "C", "C++", "JavaScript"] },
        { title: "AI & Data", items: ["Machine Learning", "Deep Learning", "NumPy", "Pandas", "Data Analysis"] },
        { title: "Frameworks & Backend", items: ["Flask", "REST APIs", "Full Stack Development"] },
        { title: "Dev Tools", items: ["Git", "GitHub", "VS Code"] }
      ]
    },
    education: {
      degree: "B.Tech in AI&DS",
      status: "Pursuing",
      institution: "DKTE Engineering College, Ichalkaranji",
      description: "Undergraduate engineering program focusing on Artificial Intelligence, Machine Learning, Data Science, and Computer Engineering fundamentals."
    }
  },

  projects: [
    {
      id: "mainthub",
      name: "MaintHub",
      category: "Full Stack / Machine Maintenance",
      description: "A full-stack Machine Maintenance Management System designed to help manage machine maintenance, scheduling, notifications, and maintenance tracking.",
      github: "https://github.com/anugrahpatil-creator/MaintHub",
      technologies: ["Python", "Flask", "Flutter", "MySQL"],
      image: "/assets/mainthub.jpg",
      featured: true
    },
    {
      id: "readmitflow",
      name: "ReadmitFlow",
      category: "AI/ML / Healthcare",
      description: "An explainable discharge decision-support prototype designed to identify potential readmission risk and support human-approved follow-up actions.",
      github: "https://github.com/anugrahpatil-creator/ReadmitFlow",
      technologies: ["Python", "Machine Learning", "AI/ML", "Data Analysis"],
      image: "/assets/readmitflow.jpg",
      featured: true
    },
    {
      id: "internmatch",
      name: "InternMatch",
      category: "Full Stack / Internship Platform",
      description: "An internship-focused software project designed to help students discover and connect with relevant internship opportunities.",
      github: "https://github.com/anugrahpatil-creator/InternMatch",
      technologies: ["Python", "Web Development"],
      image: "/assets/internmatch.jpg",
      featured: true
    }
  ],

  contactCards: [
    {
      id: "github",
      platform: "GitHub",
      handle: "anugrahpatil-creator",
      tagline: "Explore my projects, repositories, and open source code.",
      actionLabel: "View GitHub",
      url: "https://github.com/anugrahpatil-creator",
      icon: "Github"
    },
    {
      id: "linkedin",
      platform: "LinkedIn",
      handle: "Anugrah Patil",
      tagline: "Connect with me professionally and follow my updates.",
      actionLabel: "View LinkedIn",
      url: "https://www.linkedin.com/in/anugrah-patil-baba4a377",
      icon: "Linkedin"
    },
    {
      id: "leetcode",
      platform: "LeetCode",
      handle: "AnugrahPatil19",
      tagline: "Explore my problem solving journey and algorithmic coding.",
      actionLabel: "View LeetCode",
      url: "https://leetcode.com/u/AnugrahPatil19/",
      icon: "LeetCode"
    },
    {
      id: "email",
      platform: "Email",
      handle: "anugrahpatil0@gmail.com",
      tagline: "Get in touch directly for collaborations or opportunities.",
      actionLabel: "Send Email",
      url: "mailto:anugrahpatil0@gmail.com",
      icon: "Mail"
    }
  ]
};
