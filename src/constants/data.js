import { COLORS } from "./colors";

export const SKILLS = {
  Frontend: [
    { name: "React", icon: "⚛️", level: 85 },
    { name: "JavaScript", icon: "JS", level: 88 },
    { name: "HTML & CSS", icon: "🎨", level: 90 },
    { name: "Bootstrap", icon: "B", level: 80 },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢", level: 80 },
    { name: "Express.js", icon: "EX", level: 78 },
    { name: "Spring Boot", icon: "🌱", level: 72 },
    { name: "REST APIs", icon: "🔌", level: 85 },
  ],
  Database: [
    { name: "MongoDB", icon: "🍃", level: 80 },
    { name: "MySQL", icon: "🐬", level: 75 },
  ],
  "Tools & Cloud": [
    { name: "Git & GitHub", icon: "🐙", level: 88 },
    { name: "AWS (Basics)", icon: "☁️", level: 60 },
    { name: "Vercel", icon: "▲", level: 85 },
    { name: "Figma", icon: "🎭", level: 70 },
  ],
  Programming: [
    { name: "Java", icon: "☕", level: 82 },
    { name: "DSA", icon: "🧩", level: 78 },
    { name: "JWT Auth", icon: "🔐", level: 80 },
    { name: "Linux", icon: "🐧", level: 65 },
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
    live: "https://studenthub-teal.vercel.app/",
    screenshot: "https://github.com/suraj-pujari/Assets/blob/main/StudentHub.png?raw=true",
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
    screenshot: "https://github.com/suraj-pujari/Assets/blob/main/HomeXpress.png?raw=true",
    featured: false,
    status: "completed",
    color: COLORS.accentGreen,
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
    imageUrl:
      "https://github.com/suraj-pujari/Assets/blob/main/DSA%20Certificate.jpg?raw=true",
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
    imageUrl:
      "https://github.com/suraj-pujari/Assets/blob/main/DSA%20Certificate.jpg?raw=true",
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
    imageUrl:
      "https://github.com/suraj-pujari/Assets/blob/main/MIT%20Hackathon%20Win.jpg?raw=true",
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
    imageUrl:
      "https://github.com/suraj-pujari/Assets/blob/main/%F0%9F%A7%91%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB%20Ethical%20Hacking%20Certificate.jpg?raw=true",
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
  "Certs",
];

export const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/suraj-pujari", icon: "⬡" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/suraj-pujari83/", icon: "in" },
  { label: "Email", url: "mailto:surajpujari8383@gmail.com", icon: "✉" },
];
