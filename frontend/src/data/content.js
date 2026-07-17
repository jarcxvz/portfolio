// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Jae Anne Rose",
  lastName: "Gonzalvo",
  role: "Junior QA Analyst",
  roleSecondary: "& Front-End Developer",
  location: "Bauan, Batangas City, PH",
  email: "romerojaeannerose@gmail.com",
  phone: "0991-899-3953",
  linkedin: "linkedin.com/in/jaeannerose",
  linkedinUrl: "https://linkedin.com/in/jaeannerose",
  GitHubUrl: "https://github.com/jarcxvz",
  GitHub: "github.com/jarcxvz",
  tagline:
    "BS Information Technology graduate, Cum Laude, Class Rank #2 Overall. I test, break, and build web systems — from React front ends to the MySQL tables underneath.",
  aboutParagraphs: [
    "I'm a fresh IT graduate who genuinely likes both sides of the build: writing the feature and then trying to break it. That split interest is what pulls me toward software quality assurance — I care about whether a system actually holds up for the person using it, not just whether it compiles.",
    "During my OJT at ARC System Solutions Co., I built and tested a full e-commerce platform end to end — customer and admin portals, payment integration, inventory, order flow — then spent just as much time writing test cases and chasing down defects before it shipped.",
    "As team leader and front-end developer on my capstone, an IoT-based health kiosk, I learned how much QA discipline matters when hardware, an API, and a database all have to agree with each other in real time.",
  ],
};

export const skills = [
  { name: "React.js", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "React Native", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "MariaDB", category: "backend" },
  { name: "Manual Testing", category: "qa" },
  { name: "Test Case Design", category: "qa" },
  { name: "Bug Identification", category: "qa" },
  { name: "Agile / SDLC", category: "practice" },
  { name: "REST API Integration", category: "practice" },
  { name: "System Deployment", category: "practice" },
];

export const experience = [
  {
    company: "ARC System Solutions Co.",
    role: "Full Stack Developer & Software Testing Intern",
    period: "2025",
    location: "Mataas na Lupa, Lipa City",
    points: [
      "Developed and tested an e-commerce platform with customer and admin portals, payment integration, inventory management, and automated order processing using HTML, PHP, and MySQL.",
      "Performed functional testing to validate system features, workflows, and user interactions before deployment.",
      "Identified and resolved software defects during testing, improving system stability prior to deployment.",
      "Conducted website testing to improve reliability, usability, and overall application quality.",
    ],
  },
];

export const projects = [
  {
    id: "01",
    title: "IoT-Based Health Kiosk",
    subtitle: "for Vital Signs Capturing & Appointment Scheduling — SJPCF",
    tag: "Capstone Project",
    description:
      "Led the capstone team as front-end developer and team leader. Integrated REST API services with Node.js and MariaDB, validated features against project requirements, and presented the system at the Research Forum 2026.",
    stack: ["React", "Node.js", "MariaDB", "REST API"],
    image: "/projects/thesis.png",
  },
  {
    id: "02",
    title: "Cake Ordering E-Commerce System",
    subtitle: "Full-stack cake ordering & customization platform — OJT Project",
    tag: "OJT Project",
    description:
      "Built dynamic product customization (sizes, add-ons) with JSON-based configs, automated stock sync and order totals, and integrated PayMongo for GCash, Maya, and COD. Tested ordering workflows end to end and deployed on Hostinger.",
    stack: ["PHP", "MySQL", "HTML/CSS", "PayMongo API"],
    image: "/projects/conti.png",
  },
  {
    id: "03",
    title: "Payroll Management System",
    subtitle: "Automated salary & tax computation — School Project",
    tag: "School Project",
    description:
      "Built a payroll system to automate employee salary and tax computations, with automated reporting features to reduce manual computation errors. Tested payroll logic, report generation, and workflows for accuracy.",
    stack: ["HTML", "JavaScript", "CSS", "MySQL"],
    image: "/projects/payroll.png",
  },
];

export const education = {
  school: "Westmead International School",
  location: "Alangilan, Batangas City",
  degree: "Bachelor of Science in Information Technology",
  period: "2022 – 2026",
  honors: "Cum Laude · GWA 1.25 · Class Rank #2 Overall",
};

export const achievements = [
  { title: "Dean's Lister, Westmead International School", period: "2022 – 2026" },
  { title: "Research Forum Presenter", period: "May 2026" },
  { title: "2nd Place, Quiz Bee — BITS, Lipa Convention Center", period: "October 2025" },
  { title: "TESDA NC II — Computer System Servicing", period: "August 2023" },
];

export const certifications = [
  { title: "Introduction to AI and Prompt Engineering", place: "Malate, Manila City", date: "Apr 11, 2025" },
  { title: "Empowering Tomorrow's Technology Innovators through IoT and Data Analytics Excellence", place: "Alangilan, Batangas City", date: "Jun 6, 2025" },
  { title: "Future-Proof Skills: Empowering Students with Data, AI, and Analytics", place: "LASCA", date: "Oct 25, 2025" },
];

export const socials = [
  { label: "LinkedIn", url: "https://linkedin.com/in/jaeannerose" },
  { label: "GitHub", url: "https://github.com/jarcxvz" },
  { label: "Email", url: "mailto:romerojaeannerose@gmail.com" },
];
