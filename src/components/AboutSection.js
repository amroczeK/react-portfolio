import React from 'react';
import home1 from '../data/images/home1.png';
import { Base, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 0.75, ease: 'easeOut', staggerChildren: 1 } },
  };

  return (
    <Base>
      <Description>
        <motion.div variants={container} initial='hidden' animate='show' className='title'>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide className='hide'>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide className='hide'>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis autem iure nihil.</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt='' />
      </Image>
    </Base>
  );
};

export default AboutSection;
