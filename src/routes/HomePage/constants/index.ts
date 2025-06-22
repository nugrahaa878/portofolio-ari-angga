import { Post, Project, Work } from "../types";

// Software Development Services
export const SOFTWARE_SERVICES = [
  {
    id: 1,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
    icon: "💻",
    features: ["React/Next.js", "Node.js Backend", "Cloud Deployment", "Mobile Responsive"]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    icon: "📱",
    features: ["React Native", "Flutter", "iOS/Android", "Cross-platform"]
  },
  {
    id: 3,
    title: "Enterprise Solutions",
    description: "Scalable enterprise software solutions designed to streamline business processes and improve operational efficiency.",
    icon: "🏢",
    features: ["Microservices", "API Integration", "Database Design", "Security First"]
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    description: "Cloud infrastructure setup, deployment automation, and DevOps solutions for scalable and reliable applications.",
    icon: "☁️",
    features: ["AWS/Azure", "Docker/Kubernetes", "CI/CD Pipeline", "Monitoring"]
  }
];

// Technical Expertise Areas
export const TECHNICAL_EXPERTISE = [
  {
    title: "Modern Frontend",
    description: "Building responsive, interactive user interfaces with React, Vue.js, and modern CSS frameworks",
    icon: "🎨"
  },
  {
    title: "Backend Architecture",
    description: "Designing scalable server-side solutions with Node.js, Python, and microservices architecture",
    icon: "⚙️"
  },
  {
    title: "Database Design",
    description: "Optimizing data storage and retrieval with SQL and NoSQL database solutions",
    icon: "🗄️"
  },
  {
    title: "API Development",
    description: "Creating robust RESTful and GraphQL APIs for seamless system integration",
    icon: "🔗"
  }
];

// Technology Stack
export const TECH_STACK = [
  { name: "React/Next.js", category: "Frontend" },
  { name: "Vue.js/Nuxt.js", category: "Frontend" },
  { name: "Node.js/Express", category: "Backend" },
  { name: "Python/Django", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS/Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "TypeScript", category: "Language" }
];

export const LIST_POST: Post[] = [
  {
    content: "Exploring the latest trends in modern web development, including serverless architecture, JAMstack, and progressive web applications for enhanced user experiences.",
    date: "November 2024",
    imgLink: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Web+Development",
    section: "Web Development",
    title: "Modern Web Development: Trends and Best Practices",
    url: "#"
  },
  {
    content: "A comprehensive guide to building scalable microservices architecture with Docker, Kubernetes, and cloud-native technologies for enterprise applications.",
    date: "October 2024",
    imgLink: "https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Microservices",
    section: "Architecture",
    title: "Building Scalable Microservices with Kubernetes",
    url: "#"
  },
  {
    content: "Best practices for implementing CI/CD pipelines, automated testing, and deployment strategies to improve software delivery and reduce time to market.",
    date: "September 2024",
    imgLink: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=DevOps",
    section: "DevOps",
    title: "DevOps Excellence: CI/CD and Automation",
    url: "#"
  }
];

export const LIST_PROJECTS: Project[] = [
  {
    details: "Enterprise e-commerce platform with advanced inventory management, payment processing, and analytics dashboard. Built for scalability and high performance.",
    imgUrl: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=E-commerce",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe API"],
    title: "Enterprise E-commerce Platform",
    preview: []
  },
  {
    details: "Real-time collaboration platform enabling teams to work together seamlessly with video conferencing, file sharing, and project management features.",
    imgUrl: "https://via.placeholder.com/400x300/6366F1/FFFFFF?text=Collaboration",
    techStack: ["React", "WebRTC", "Socket.io", "MongoDB", "AWS"],
    title: "Team Collaboration Platform",
    preview: []
  },
  {
    details: "Comprehensive business intelligence dashboard providing real-time analytics, data visualization, and reporting capabilities for enterprise decision-making.",
    imgUrl: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Analytics",
    techStack: ["Vue.js", "Python", "PostgreSQL", "D3.js", "Docker"],
    title: "Business Intelligence Dashboard",
    preview: []
  }
];

export const TEAM_INFO = {
  companyName: "Synergy Bytes",
  tagline: "Transforming Business Through Technology",
  description: "We specialize in developing cutting-edge software solutions that drive business growth, improve operational efficiency, and deliver exceptional user experiences across all industries.",
  founded: "2024",
  experience: "10+ years combined experience in software development"
};

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechCorp Solutions",
    content: "Their full-stack development expertise transformed our digital infrastructure. The team delivered beyond expectations with exceptional technical quality.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "Product Manager, Digital Dynamics",
    content: "Outstanding technical expertise and project management. They understood our vision and delivered a scalable solution that drives our business growth.",
    rating: 5
  },
  {
    name: "Amanda Rodriguez",
    position: "CEO, InnovateLab",
    content: "Professional, reliable, and technically excellent. Their modern development approach and attention to detail made our project a huge success.",
    rating: 5
  }
];

export const LIST_WORK: Work[] = [
  {
    company: "Synergy Bytes",
    icon: "https://via.placeholder.com/60x60/3B82F6/FFFFFF?text=SB",
    position: "Co-Founder & CTO",
    workDuration: "2024 - Present",
    description: "Leading the technical vision for innovative software solutions, specializing in web applications, mobile development, and enterprise systems with a focus on scalability, performance, and modern development practices."
  },
  {
    company: "Tokopedia",
    icon: "https://via.placeholder.com/60x60/42A5F5/FFFFFF?text=TK",
    position: "Senior Software Engineer",
    workDuration: "2022 - 2024",
    description: "Developed high-performance web applications and led optimization initiatives, gaining expertise in scalable architecture, microservices, and user experience design for large-scale platforms."
  },
  {
    company: "Tech Startup",
    icon: "https://via.placeholder.com/60x60/10B981/FFFFFF?text=TS",
    position: "Full Stack Developer",
    workDuration: "2020 - 2022",
    description: "Built end-to-end web applications using modern JavaScript frameworks, implemented RESTful APIs, and worked with cross-functional teams to deliver innovative software solutions."
  }
];