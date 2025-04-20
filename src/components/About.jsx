import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <span className={style.link}>
          Sunidhi Panigrahi,
        </span>
        {' '}
        a passionate full-stack developer skilled in React, Node.js, MongoDB, and modern web technologies. I love building clean, functional, and responsive applications. When I’m not coding, I’m probably exploring design, listening to music, or learning something new.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        My journey into tech has been driven by curiosity and creativity. From mastering frontend frameworks to working with databases and APIs, I enjoy turning ideas into interactive experiences. I’m always up for collaborative projects and love solving real-world problems through code.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Interested in working together? I’m always open to exciting opportunities and collaborations.
        {' '}
        <a
          href="https://drive.google.com/your-resume-link"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more details about my work and skills.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
