import { Post, Project, Work } from "../types";

// Healthcare Services
export const HEALTHCARE_SERVICES = [
  {
    id: 1,
    title: "Electronic Health Records (EHR)",
    description: "Comprehensive EHR solutions designed for healthcare providers to manage patient data securely and efficiently.",
    icon: "🏥",
    features: ["HIPAA Compliant", "HL7 Integration", "Patient Portal", "Real-time Sync"]
  },
  {
    id: 2,
    title: "Telemedicine Platform",
    description: "Secure video consultation platforms connecting patients with healthcare professionals remotely.",
    icon: "💻",
    features: ["HD Video Calls", "Prescription Management", "Appointment Scheduling", "Multi-device Support"]
  },
  {
    id: 3,
    title: "Healthcare Analytics",
    description: "Advanced analytics solutions to transform healthcare data into actionable insights for better patient outcomes.",
    icon: "📊",
    features: ["Predictive Analytics", "Population Health", "Performance Metrics", "Custom Dashboards"]
  },
  {
    id: 4,
    title: "Medical Device Integration",
    description: "Seamless integration solutions for medical devices and IoT healthcare equipment.",
    icon: "🔧",
    features: ["IoMT Integration", "Real-time Monitoring", "Device Management", "Data Aggregation"]
  }
];

// Healthcare Expertise Areas
export const HEALTHCARE_EXPERTISE = [
  {
    title: "HIPAA Compliance",
    description: "Ensuring all solutions meet HIPAA requirements for patient data protection",
    icon: "🔒"
  },
  {
    title: "HL7 & FHIR Standards",
    description: "Implementing healthcare interoperability standards for seamless data exchange",
    icon: "🔄"
  },
  {
    title: "Medical Imaging",
    description: "Advanced solutions for DICOM image processing and management",
    icon: "🔬"
  },
  {
    title: "Clinical Workflows",
    description: "Optimizing healthcare processes and clinical decision-making systems",
    icon: "⚕️"
  }
];

// Technology Stack
export const TECH_STACK = [
  { name: "React/Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python/Django", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS/Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" }
];

export const LIST_POST: Post[] = [
  {
    content: "Understanding the importance of HIPAA compliance in healthcare software development and how to implement security measures that protect patient data while maintaining system usability.",
    date: "November 2024",
    imgLink: "https://via.placeholder.com/400x300/1565C0/FFFFFF?text=HIPAA+Compliance",
    section: "Healthcare Compliance",
    title: "HIPAA Compliance in Healthcare Software Development",
    url: "#"
  },
  {
    content: "Exploring the HL7 FHIR standard and its role in healthcare interoperability, with practical examples of implementation in modern healthcare systems.",
    date: "October 2024",
    imgLink: "https://via.placeholder.com/400x300/00897B/FFFFFF?text=HL7+FHIR",
    section: "Healthcare Standards",
    title: "Implementing HL7 FHIR for Healthcare Interoperability",
    url: "#"
  },
  {
    content: "Best practices for developing telemedicine platforms that are secure, scalable, and provide excellent user experience for both patients and healthcare providers.",
    date: "September 2024",
    imgLink: "https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Telemedicine",
    section: "Telemedicine",
    title: "Building Secure Telemedicine Platforms",
    url: "#"
  }
];

export const LIST_PROJECTS: Project[] = [
  {
    details: "Comprehensive Electronic Health Record system for medical facilities with HIPAA compliance, patient portal, and real-time data synchronization across multiple departments.",
    imgUrl: "https://via.placeholder.com/400x300/1565C0/FFFFFF?text=EHR+System",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "HIPAA Compliant"],
    title: "EHR Management System",
    preview: []
  },
  {
    details: "Secure telemedicine platform enabling remote consultations with HD video, prescription management, and integrated appointment scheduling for healthcare providers.",
    imgUrl: "https://via.placeholder.com/400x300/00897B/FFFFFF?text=Telemedicine",
    techStack: ["React Native", "WebRTC", "Firebase", "Express.js"],
    title: "Telemedicine Platform",
    preview: []
  },
  {
    details: "Advanced healthcare analytics platform providing insights into patient outcomes, population health trends, and operational efficiency metrics for hospital management.",
    imgUrl: "https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Analytics",
    techStack: ["Python", "Django", "PostgreSQL", "Tableau", "AWS"],
    title: "Healthcare Analytics Dashboard",
    preview: []
  }
];

export const TEAM_INFO = {
  companyName: "Synergy Bytes",
  tagline: "Transforming Healthcare Through Technology",
  description: "We specialize in developing cutting-edge healthcare software solutions that improve patient outcomes, streamline clinical workflows, and ensure regulatory compliance.",
  founded: "2024",
  experience: "10+ years combined experience in healthcare technology"
};

export const TESTIMONIALS = [
  {
    name: "Dr. Sarah Johnson",
    position: "Chief Medical Officer, MedCenter",
    content: "Their EHR solution transformed our patient management process. The team's understanding of healthcare workflows is exceptional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "IT Director, Regional Hospital",
    content: "Outstanding technical expertise combined with deep healthcare domain knowledge. Highly recommend for any healthcare technology project.",
    rating: 5
  }
];

export const LIST_WORK: Work[] = [
  {
    company: "Synergy Bytes",
    icon: "https://via.placeholder.com/60x60/1565C0/FFFFFF?text=SB",
    position: "Co-Founder & CTO",
    workDuration: "2024 - Present",
    description: "Leading the technical vision for healthcare software solutions, specializing in EHR systems, telemedicine platforms, and healthcare analytics with a focus on HIPAA compliance and interoperability standards."
  },
  {
    company: "Tokopedia",
    icon: "https://via.placeholder.com/60x60/42A5F5/FFFFFF?text=TK",
    position: "Senior Software Engineer",
    workDuration: "2022 - 2024",
    description: "Developed high-performance web applications and led optimization initiatives, gaining expertise in scalable architecture and user experience design that now benefits healthcare platform development."
  }
];