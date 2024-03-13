// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  facebook,
  instagram,
  twitter,
  github,
} from "../assets";

import Youtubeimg from "../assets//Youtubeimg.png";
import Travel from '../assets//Travel.png'
import logo_name from "../assets//logo_name.svg"
import LinkedIn from '../assets//LinkedIn.svg';
export {logo_name};
import Boostrap from "../assets/tech/Boostrap.png";
import netflix from "../assets/netflix.png";

// Navbar Links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "http://www.github.com/sanidhyy/3d-portfolio/",
  // },
];

// Services
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: reactjs,
  },
  {
    title: "JS Developer",
    icon: javascript,
  },
];

// Technologies
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },,
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "boostrap",
    icon : Boostrap,
  },
  {
    name:"figma",
    icon:figma
  }
];

// Experiences
const experiences = [
  {
    title: "React.js Developer",
    company_name: "H2",
    icon: reactjs,
    iconBg: "#383E56",
    date: "August 2023 - January 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Handled frontend technologies with Reactjs, Tailwind css, Redux Toolkit.",
      "Gained valuable honed  expertise in HTML, CSS, JavaScript, React, Tailwind CSS, and Redux-toolkit through hands-on involvement in real time webapplication projects.",
      "Used git as a Version Control System.",
    ],
  },
 
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
];

// Projects
const projects = [
  {
    name: "STREAMSYNC",
    description:
      "Streamsync clone incorporating the YouTube API, I've integrated live chat functionality, Togglebar, nested Comments,Shimmer UI .   API POLLING , API INTERATION",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: Youtubeimg,
    source_code_link: "https://github.com/aiswarya-cs/YOUTUBE-CLONE",
    live_site_link: "https://wondrous-wisp-8b7d2b.netlify.app",
  },
  {
    name: "GLOBETREK ADVENTURES",
    description:
      "Website utilizing React, AOS library, and SCSS.This website that enable all of the most famous places to visit.Animated scrolling to enhance user engagement using Aos library.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Aos Library",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: Travel,
    source_code_link: "https://github.com/aiswarya-cs/Travel_Tour",
    live_site_link: "https://travelworld-067f28.netlify.app/",
  },
  {
    name: "Cinemix - A Netflix Clone",
    description:
      "A Netflix clone is a streaming platform designed to replicate the features and functionalities of the popular online streaming service Cinemix.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Boostrap",
        color: "green-text-gradient",
      },
      {
        name: "UseContext",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/aiswarya-cs/Cinemix--A-Netflix-Clone.git",
    live_site_link: "https://github.com/aiswarya-cs/Cinemix--A-Netflix-Clone.git",
  },
  
];

const socials = [
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/aiswarya_c.s___?igsh=MWhkZnBtcXU2anc1YQ==",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/aiswarya-cs",
  },
  {
    name:"LinkedIn",
    icon:LinkedIn,
    link:"https://www.linkedin.com/in/aiswarya-c-s-32a60a25a/ "
  }
];

export { services, technologies, experiences, testimonials, projects, socials };
