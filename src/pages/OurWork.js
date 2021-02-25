import React from 'react';
import { Link } from 'react-router-dom';
import { MovieState } from '../data/movieState';
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from '../animation';
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#FFF' }}
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      {MovieState.map((e, idx) => (
        <Movie key={idx}>
          <Link to={e.url} style={{ textDecoration: 'none' }}>
            <motion.h2 variants={fade}>{e.title}</motion.h2>
          </Link>
          <motion.div variants={lineAnimation} className='line' />
          <Link to={e.url} style={{ textDecoration: 'none' }}>
            <Hide>
              <motion.img variants={photoAnimation} src={e.mainImg} alt={e.mainImg.toString()} />
            </Hide>
          </Link>
        </Movie>
      ))}
    </Work>
  );
};

// Wrap styled div with motion.div to access variants, inital, animate
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem; // Align container to Logo and Nav
  h2 {
    color: #1b1b1b;
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.4rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

// Keep the image constrained to it's DIV instead of fading in full sized
const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
