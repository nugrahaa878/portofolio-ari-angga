import { Post, Project } from "../types";

export const LIST_POST: Post[] = [
  {
    content:
      "The development of website is progressing rapidly from years to years. It started with website that only had static content, and now website can have dynamic and progressive content...",
    date: "19 July 2023",
    imgLink:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YbpTBONRFsZI-KWxkB6s-w.png",
    section: "Web Development",
    title: "Web Rendering Wars: CSR vs SSR",
    url: "https://medium.com/@nugrahaa878/web-rendering-wars-csr-vs-ssr-84ae3e903ada",
  },
  {
    content:
      "In this article, we'll show you how OY! is boosting database performance, focusing on partitioning in the settlement process. This article delves into the planning phase of our partitioning strategy...",
    date: "23 July 2024",
    imgLink:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*jvKgalrXQALy0I0F7VV1ww.jpeg",
    section: "Backend",
    title: "How we implement Table Partitioning Without Any Downtime — Planning",
    url: "https://medium.com/oyindonesia/how-we-implement-table-partitioning-without-any-downtime-planning-fa57e43eb685",
  },
  {
    content:
      "This article details the implementation process, including the creation of partition tables, data migration, and post-migration optimizations. We also highlight the significant improvements...",
    date: "23 July 2024",
    imgLink:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*jvKgalrXQALy0I0F7VV1ww.jpeg",
    section: "Backend",
    title: "How we implement Table Partitioning Without Any Downtime — Execution",
    url: "https://medium.com/oyindonesia/how-we-implement-table-partitioning-without-any-downtime-execution-eadac94db8bb",
  },
  {
    content:
      "Halo teman teman semua, kembali lagi ke pembahasan kita tentang dunia Software Engineering. Pada kesempatan kali ini kita akan membahas tentang Clean Code. Jadi apa itu Clean Code? Apa yang harus dibersihkan?...",
    date: "5 April 2021",
    imgLink:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cPANVdAfM1dj24thKs6h4w.jpeg",
    section: "Software Engineering",
    title: "Kenapa Harus Clean Code?",
    url: "https://medium.com/@ari-angga/kenapa-harus-clean-code-c3e318aa48e9",
  },
];

export const LIST_PROJECTS: Project[] = [
  {
    details:
      "Logbook App for the Faculty of Medicine, Universitas Indonesia. For faster development, I've integrated some features as Web Views. For the Flutter side, I'm utilizing Cubit for state management and implementing separation of concerns for improved readability and maintainability. On the web side, we are using React with Typescript, implementing React Context for state management, and utilizing the Chakra-UI component library.",
    imgUrl: "https://i.ibb.co.com/m98zxp7/logbook-logo.png",
    techStack: ["Flutter", "React", "Typescript", "Cubit"],
    title: "Logbook Anestesi UI",
    playStore: "play.google.com/store/apps/details?id=com.mobile.logbook_app",
    webLink: "https://anestesi-ui.id/",
  },
  {
    details:
      "In this project, I have demonstrated proficiency in implementing end-to-end CI/CD processes from scratch and integrating them seamlessly with cloud services such as Google Cloud Platform (GCP). Ive created and set up my own GitHub workflow file to build the Vite project. Afterward, I integrated it with Cloud Run on GCP so that any changes in my repository will trigger a build and push to Cloud Run, updating my website automatically.",
    imgUrl: "https://arinugraha.dev/src/assets/avatar.png",
    techStack: ["GCP", "Cloud Run", "Typescript", "Docker"],
    title: "Portfolio Website",
    webLink: "https://arinugraha.dev/",
  },
  {
    details:
    "A comprehensive website designed to record and monitor individual medical activities. The platform includes features for ongoing health tracking and an extensive medical history record. Users can also search for healthcare facilities in specific locations, making it easy to access relevant health services nearby. This tool is ideal for personal health management and accessing care resources efficiently.",
    imgUrl: "https://i.ibb.co.com/gd58k9q/app-icon.png",
    techStack: ["Flutter", "Cloud", "Docker"],
    title: "PHR Fasilkom UI",
    webLink: "https://phr-fasilkom.netlify.app/",
  },
  {
    details:
    "An internal website designed for managing POLANTAS (Indonesian Traffic Police) membership. The platform includes features for listing members, managing and updating membership status, generating organizational hierarchy charts, and additional functionalities. This tool aims to streamline the administration and oversight of POLANTAS members, enhancing operational efficiency.",
    imgUrl: "https://i.ibb.co.com/7WyT6n6/police-2.png",
    techStack: ["ReactJS", "Typescript"],
    title: "SIBINKAR Polantas",
    webLink: "- (internal only)",
  },
];
