import {
  linkedin, instagram, github,linkedin1, instagram1,github1, cloud,job,job1,job2,bg1,bg2,bg3,landbg,cloud1,cloud2,cloud3,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sunidhi-panigrahi-b44559306/',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 3,
    name: 'Instagram',
    url: 'https://www.instagram.com/su_nidhi__',
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/sunidhi-panigrahi',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Python',
    icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Express.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Tailwind CSS',
    icon: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000',
  },
  {
    stack: ['tools', 'all'],
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Prisma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
];


const projects = [
  {
    id: 1,
    name: 'Job Portal',
    desc: 'It is a full-stack job portal application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to register, log in, browse job listings, and apply for jobs, while employers can post and manage job openings. The platform features secure authentication, dynamic routing, and a responsive UI to ensure a seamless user experience across devices.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    img: job,
    carousel: [job, job1, job2],
    source_link: 'https://github.com/sunidhi-panigrahi/jobportal',
    live_link: 'https://github.com/sunidhi-panigrahi/jobportal',
  },
  {
    id: 2,
    name: 'AI Background Remover',
    desc: 'AI BG Remover is a web-based tool that uses deep learning techniques to automatically remove backgrounds from images with high accuracy. Built using modern web technologies and AI models, it offers a fast, user-friendly interface where users can upload images and download the background-free results instantly. Ideal for e-commerce, graphic design, and content creation.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB','Open API', 'Cloudinary', 'Tailwind CSS'],
    img:landbg,
    carousel: [bg1, bg2, bg3],
    source_link: 'https://github.com/sunidhi-panigrahi/Background_Remover',
    live_link: 'https://removebg-pi-ruddy.vercel.app/',
  },
  {
    id: 3,
    name: 'Online Cloud Storage',
    desc: 'Storeit is a secure and scalable cloud storage web app built with Next.js and Appwrite. It allows users to upload, view, and manage their files in the cloud with real-time updates and user authentication. Featuring a sleek UI, file previews, and role-based access, the platform ensures seamless file management across devices.',
    tech: ['Next.js', 'Appwrite', 'Tailwind CSS'],
    img: cloud,
    carousel: [cloud1, cloud2, cloud3],
    source_link: 'https://github.com/sunidhi-panigrahi/File-Sharing',
    live_link: 'https://github.com/sunidhi-panigrahi/Background_Remover',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 3,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, social, navLinks,
};
