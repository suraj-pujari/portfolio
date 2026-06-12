import { COLORS } from "./colors";

export const SKILLS = {
  Frontend: [
    { name: "React", mark: "RE", kind: "UI library" },
    { name: "JavaScript", mark: "JS", kind: "Language" },
    { name: "HTML & CSS", mark: "UI", kind: "Web fundamentals" },
    { name: "Bootstrap", mark: "BT", kind: "CSS framework" },
  ],
  Backend: [
    { name: "Node.js", mark: "ND", kind: "Runtime" },
    { name: "Express.js", mark: "EX", kind: "API framework" },
    { name: "REST APIs", mark: "API", kind: "Architecture" },
    { name: "JWT Auth", mark: "JWT", kind: "Authentication" },
  ],
  Database: [
    { name: "MongoDB", mark: "MDB", kind: "NoSQL database" },
    { name: "Mongoose", mark: "MNG", kind: "MongoDB ODM" },
    { name: "MySQL", mark: "SQL", kind: "Relational database" },
  ],
  "Tools & Platforms": [
    { name: "Git & GitHub", mark: "GIT", kind: "Version control" },
    { name: "Vercel", mark: "VC", kind: "Deployment" },
    { name: "AWS Basics", mark: "AWS", kind: "Cloud basics" },
    { name: "Postman", mark: "PM", kind: "API testing" },
    { name: "Hoppscotch", mark: "HOP", kind: "API testing" },
    { name: "Linux", mark: "LX", kind: "CLI & System Tools" },
  ],
  "Languages & CS": [
    { name: "Java", mark: "JV", kind: "Language" },
    { name: "DSA", mark: "DSA", kind: "Core CS" },
    { name: "Problem Solving", mark: "PS", kind: "Practice" },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "StudentHub",
    subtitle: "Academic Project Collaboration Platform",
    description:
      "A platform for students to upload, continue, and collaborate on academic projects. Features team management, leaderboards, contribution tracking, and full project history.",
    features: [
      "Upload & Browse Projects",
      "Team Collaboration",
      "Leaderboards",
      "Contribution Tracking",
      "Project Documentation",
      "Project History",
    ],
    tech: ["React", "Spring Boot", "MySQL", "JWT Auth"],
    github: "https://github.com/suraj-pujari/studenthub",
    live: "https://studenthub-suraj.vercel.app/",
    screenshot: "/assets/studenthub.png",
    featured: true,
    status: "completed",
    color: COLORS.primary,
  },
  {
    id: 2,
    title: "HomeXpress",
    subtitle: "Online Home Services Portal",
    description:
      "A full-featured home services marketplace connecting customers with service providers. Includes booking, dashboards for both customer and provider, notifications, and order management.",
    features: [
      "Service Booking",
      "Customer Dashboard",
      "Provider Dashboard",
      "Notifications",
      "Order Management",
      "Search & Filtering",
    ],
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/suraj-pujari/HomeXpress.com",
    live: "https://suraj-pujari.github.io/HomeXpress.com/",
    screenshot: "/assets/homexpress.png",
    featured: false,
    status: "completed",
    color: COLORS.accentGreen,
  },
  {
    id: 3,
    title: "Simon Says Game",
    subtitle: "Memory-Based Interactive Game",
    description:
      "A browser-based memory game where players repeat an increasing color sequence. Built with interactive game-state logic, score tracking, and responsive visual feedback.",
    features: [
      "Sequence Generation",
      "User Input Validation",
      "Highest Score Tracking",
      "Interactive Color Feedback",
      "Game Reset Flow",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/suraj-pujari/simon-says-games",
    live: "https://simon-says-games.vercel.app/",
    screenshot: "/assets/simon-says-game.png",
    featured: false,
    status: "completed",
    color: "#facc15",
  },
];

export const CERTS = [
  {
    id: 1,
    title: "DSA with Java — Alpha Course",
    issuer: "Apna College",
    date: "2024",
    status: "issued",
    color: "#4f8ef7",
    category: "Programming",
    description:
      "Completed Alpha DSA with Java course by Apna College — covering arrays, linked lists, trees, graphs, recursion, sorting, and problem-solving patterns.",
    skills: ["Java", "Arrays", "LinkedList", "Trees", "Graphs", "Recursion", "Sorting"],
    imageUrl: "/assets/dsa-certificate.jpg",
    credentialUrl: "",
  },
  {
    id: 2,
    title: "MERN Stack + Sigma Development",
    issuer: "Apna College",
    date: "2025",
    status: "issued",
    color: "#a855f7",
    category: "Web Development",
    description:
      "Completed Sigma 5 Development course — full-stack web development with MongoDB, Express, React, Node.js, MySQL, Git & GitHub, REST APIs and deployment.",
    skills: ["React", "Node.js", "MongoDB", "Express", "MySQL", "Git", "GitHub", "REST APIs"],
    imageUrl: "/assets/dsa-certificate.jpg",
    credentialUrl: "",
  },
  {
    id: 3,
    title: "MIT Hackathon — Runner-Up",
    issuer: "MIT Vishwaprayag University",
    date: "2025",
    status: "issued",
    color: "#f59e0b",
    category: "Achievement",
    description:
      "Secured Runner-Up at MIT Vishwaprayag University College Level Hackathon 2025 with StudentHub — an academic collaboration platform built by team CollabCrew.",
    skills: ["React", "Spring Boot", "MySQL", "Teamwork", "Problem Solving"],
    credentialUrl: "",
    imageUrl: "/assets/mit-hackathon.jpg",
  },
  {
    id: 4,
    title: "Ethical Hacking Course",
    issuer: "WsCube Tech",
    date: "Jul 2024",
    status: "issued",
    color: "#10d9a0",
    category: "Cybersecurity",
    description:
      "2-month Ethical Hacking course by WsCube Tech — penetration testing, vulnerability assessment, network security, and cybersecurity hands-on projects. Grade: A+",
    skills: ["Penetration Testing", "Network Security", "OWASP", "Kali Linux", "Vulnerability Assessment"],
    credentialUrl: "https://www.wscubetech.com/verify-certificate",
    imageUrl: "/assets/ethical-hacking.jpg",
  },
  {
    id: 5,
    title: "Dexter Innofest 2023-24",
    issuer: "Punyashlok Ahilyadevi Holkar Solapur University",
    date: "Mar 2024",
    status: "issued",
    color: "#38bdf8",
    category: "Competition",
    description:
      "Participated in the National Level Programming / Paper Presentation Competition at Dexter Innofest 2023-24, organized by the Department of Computer Science and Computer Applications.",
    skills: ["Programming", "Paper Presentation", "Problem Solving"],
    credentialUrl: "",
    imageUrl: "/assets/dexter-innofest.jpg",
  },
];

export const EDUCATION = [
  {
    icon: "🏫",
    degree: "SSC — Secondary School Certificate",
    institution: "Bhairavnat Vidyalay & Jr. College, Ankoli",
    board: "Maharashtra State Board, Pune",
    period: "2019 — 2020",
    year: "2020",
    percentage: "79.40%",
    totalMarks: "397 / 500",
    pursuing: false,
    color: "#10d9a0",
    desc: "79.40% · Maharashtra State Board · Pune Division",
  },
  {
    icon: "🎒",
    degree: "HSC — Higher Secondary Certificate",
    institution: "Bhairavnat Vidyalay & Jr. College, Ankoli",
    board: "Maharashtra State Board, Pune",
    stream: "Arts",
    period: "2020 — 2022",
    year: "2022",
    percentage: "66.50%",
    totalMarks: "399 / 600",
    pursuing: false,
    color: "#a855f7",
    desc: "66.50% · Arts Stream · Maharashtra State Board · Pune Division",
  },
  {
    icon: "🎓",
    degree: "BCA — Bachelor of Computer Applications",
    institution: "Deshbhakta Harinarayan Bankatlal Soni College, Solapur",
    board: "CBCS Pattern 2022",
    period: "2022 — 2025",
    year: "2025",
    percentage: "73.50%",
    cgpa: "8.63",
    grade: "A+",
    pursuing: false,
    color: "#4f8ef7",
    desc: "CBCS Pattern · CGPA 8.63 · A+ Grade · Deshbhakta HB Soni College, Solapur",
  },
  {
    icon: "🚀",
    degree: "MCA — Master of Computer Applications",
    institution: "MIT Vishwaprayag University",
    board: "University Program",
    period: "Aug 2025 — Mar 2027",
    year: "2027",
    percentage: null,
    pursuing: true,
    color: "#f59e0b",
    desc: "Specializing in full-stack development, cloud computing & advanced software engineering.",
  },
];

export const ROLES = [
  "🌐 MERN Stack Developer",
  "💡 DSA Enthusiast",
  "🧩 Innovative Problem Solver",
  "💻 Building Scalable Solutions",
];

export const NAV_ITEMS = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Certificates",
];

export const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/suraj-pujari" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/suraj-pujari83/" },
  { label: "LeetCode", url: "https://leetcode.com/u/suraj-pujari/" },
];
