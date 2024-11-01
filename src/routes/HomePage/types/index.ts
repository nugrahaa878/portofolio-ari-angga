export interface Post {
  section: string;
  date: string;
  title: string;
  content: string;
  imgLink: string;
  url: string;
}

export interface Project {
  title: string;
  playStore?: string;
  webLink?: string;
  appStore?: string;
  details: string;
  techStack: string[];
  imgUrl: string;
  preview?: string[];
}

export interface Work {
  company: string;
  icon: string;
  position: string;
  workDuration: string;
  description: string;
}
