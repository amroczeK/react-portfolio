import React from 'react';
import home1 from '../data/images/home1.png';
import { Base, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';
import Wave from './Wave';
import ScrollTop from '../components/ScrollTop';

const AboutSection = () => {
  return (
    <Base>
      <ScrollTop />
      <Description>
        <motion.div className='title'>
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
        <motion.p variants={fade}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis autem iure nihil.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        {/**
         * Define the initial and animate props to exit image from staggering
         */}
        <motion.img variants={photoAnimation} src={home1} alt='' />
      </Image>
      <Wave />
    </Base>
  );
};

export default AboutSection;
