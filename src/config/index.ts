import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Suraj Shetty — Software Developer",
  author: "Suraj Shetty",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Blog", href: "#blog" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Suraj Shetty",
    specialty: "Software Developer",
    summary:
      "I am a backend software developer passionate about building scalable applications using laravel and exploring GenAI and LLMs. Currently, I’m enhancing my skills in DevOps and front-end technologies like Astro.js and ReactJS to create seamless, innovative solutions.",
    email: "shetty44444@gmail.com",
  },
  experience: [
    {
      company: "Pay1",
      position: "Software Developer",
      startDate: "May 2024",
      endDate: "Present",
      summary: [
        "Worked on Sartch Product Created Whole Backend Architecture for recharge and utility & Bill Payment.",
        "Led product development and ensured smooth integration of new features and requirements.",
        "Optimize load time by 20% using query optimization and cache management and implemented Design Patterns optimize code and maintainability.",
        "Worked on Linux Server and Redis Queue for better performance and Razerpay Payment Gateway Integration.",
      ],
    },
    {
      company: "BDM INFOTECH",
      position: "Software Developer",
      startDate: "Jan 2024",
      endDate: "Feb 2024",
      summary: [
        "Worked on SAAS Application And Built A Admin Panel.",
        "Started Working on Github Action and Docker and Reactjs.",
      ],
    },
    {
      company: " iThink Logistics ",
      position: "Software Developer",
      startDate: "Jun 2021",
      endDate: "Dec 2023",
      summary: [
        "Designed and developed backend applications using PHP.",
        "Worked with front-end developers to integrate API endpoints and database queries into web applications by using Mysql for database and query and optimized queries for performance",
        "Worked on Microservices for example Docker, RabbitMQ, Apache Kafka, Redis, Elasticsearch etc.",
        "Implemented RabbitMQ and Redis for Queue management and Locking mechanism in php.",
      ],
    },
  ],
  blog: [
    {
      name: "Hashnode Blog",
      summary: "A blog platform where you can express yourself and connect with others Devs.",
      linkPreview: "https://hashnode.surajshetty.blog",
      linkSource: "https://hashnode.surajshetty.blog/",
      image: "/hashnode-1.webp",
    }, 
    {
      name: "Medium Blog",
      summary: "Personal blog where I write about things I find interesting in development.",
      linkPreview: "https://medium.com/@shetty44444",
      linkSource: "https://medium.com/@shetty44444",
      image: "/medium-1.webp",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My blog range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
