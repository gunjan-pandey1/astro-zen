import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Gunjan Pandey — Software Developer",
  author: "Gunjan Pandey",
  description:
    "Software Engineer based in Mumbai, India, specializing in backend development with Laravel, building scalable web applications, and implementing secure API architectures.",
  lang: "en",
  siteLogo: "/gunjan-profile.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "gunjan Pandey",
    specialty: "Software Developer",
    summary:
      "I am a backend software developer passionate about building scalable applications using laravel and exploring GenAI and LLMs. Currently, I'm enhancing my skills in DevOps and front-end technologies like Astro.js and ReactJS to create seamless, innovative solutions.",
    email: "gunjanap2018@gmail.com",
  },
  skills: {
    row1: ["LARAVEL", "PHP", "JAVASCRIPT", "REACTJS", "TYPESCRIPT"],
    row2: ["RABBITMQ", "REDIS", "DOCKER", "KUBERNETES", "AWS", "MONGODB", "MYSQL"]
  },
  experience: [
    {
      company: "Qtech Software",
      position: "Software Developer",
      startDate: "September 2023",
      endDate: "Present",
      summary: [
        "Worked on Sartch Product Created Whole Backend Architecture for recharge and utility & Bill Payment.",
        "Led product development and ensured smooth integration of new features and requirements.",
        "Optimize load time by 20% using query optimization and cache management and implemented Design Patterns optimize code and maintainability.",
        "Worked on Linux Server and Redis Queue for better performance and Razerpay Payment Gateway Integration.",
      ],
    },
    {
      company: " iThink Logistics ",
      position: "Software Developer",
      startDate: "May 2022",
      endDate: "Jult 2023",
      summary: [
        "Designed and developed backend applications using PHP.",
        "Worked with front-end developers to integrate API endpoints and database queries into web applications by using Mysql for database and query and optimized queries for performance",
        "Worked on AWS (S3) for uploading documents and (EC2) for personal use.",
        "Implemented RabbitMQ and Redis for Queue management and Locking mechanism in php.",
      ],
    },
  ],
  projects: [
    {
      name: "Education CRM",
      summary: "A comprehensive student management system that streamlines administrative tasks, tracks academic progress, and manages institutional workflows efficiently.",
      linkPreview: "https://github.com/gunjan-pandey1",
      linkSource: "https://github.com/gunjan-pandey1",
      image: "/education-crm.jpg",
    },
    {
      name: "Loan Management System",
      summary: "An end-to-end solution for financial institutions to process loan applications.",
      linkPreview: "https://github.com/gunjan-pandey1",
      linkSource: "https://github.com/gunjan-pandey1",
      image: "/loanApp.jpg",
    },
    {
      name: "Laravel Package",
      summary: "A developer-friendly debugging tool that provides real-time code inspection, variable tracking, and error tracing capabilities for Laravel applications.",
      linkPreview: "https://github.com/gunjan-pandey1",
      linkSource: "https://github.com/gunjan-pandey1",
      image: "/laravelPackage.jpeg",
    }
  ],
  about: {
    description: `
      Passionate backend developer with a strong foundation in designing and implementing scalable and efficient server-side solutions. Specialized in creating robust APIs and database management. Committed to staying ahead in technology trends, I have a keen interest in Microservices architecture and web security, focusing on implementing secure authentication systems and protecting against common vulnerabilities. Eager to contribute to transformative projects and collaborate with like-minded professionals in the tech community. Let's connect and explore the possibilities of creating secure, scalable solutions together!

      #BackendDevelopment #Microservices #WebSecurity #SecureAPIs #CyberSecurity
    `,
    image: "/gunjan-profile.jpg",
  },
};    

// #5755ff
