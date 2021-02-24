import React, { useState } from 'react';
import styled from 'styled-components';
import { Base } from '../styles';
import { motion } from 'framer-motion';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './hooks/useScroll';
import { scrollReveal } from '../animation';
import Toggle from './Toggle';

const FaqSection = () => {
  const [element, controls] = useScroll();
  const [toggle, setToggle] = useState([false, false, false, false]);
  const toggleHandler = (idx) => {
    let newToggle = [...toggle];
    newToggle[idx] = !toggle[idx];
    setToggle(newToggle);
  };
  return (
    <Faq variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <motion.div className='question'>
          <motion.h4
            onClick={() => {
              toggleHandler(0);
            }}
          >
            How do I start?
          </motion.h4>
          <Toggle toggle={toggle[0]}>
            <motion.div className='answer'>
              <motion.p>Lorem ipsum dolor sit amet.</motion.p>
              <motion.p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio!</motion.p>
            </motion.div>
          </Toggle>
          <motion.div className='faq-line' />
        </motion.div>
        <motion.div className='question'>
          <motion.h4
            onClick={() => {
              toggleHandler(1);
            }}
          >
            What equipment do you use?
          </motion.h4>
          <Toggle toggle={toggle[1]}>
            <motion.div className='answer'>
              <motion.p>Lorem ipsum dolor sit amet.</motion.p>
              <motion.p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio!</motion.p>
            </motion.div>
          </Toggle>
          <motion.div className='faq-line' />
        </motion.div>
        <motion.div className='question'>
          <motion.h4
            onClick={() => {
              toggleHandler(2);
            }}
          >
            How large is your team?
          </motion.h4>
          <Toggle toggle={toggle[2]}>
            <motion.div className='answer'>
              <motion.p>Lorem ipsum dolor sit amet.</motion.p>
              <motion.p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio!</motion.p>
            </motion.div>
          </Toggle>
          <motion.div className='faq-line' />
        </motion.div>
        <motion.div className='question'>
          <motion.h4
            onClick={() => {
              toggleHandler(3);
            }}
          >
            How long have we been operating for?
          </motion.h4>
          <Toggle toggle={toggle[3]}>
            <motion.div className='answer'>
              <motion.p>Lorem ipsum dolor sit amet.</motion.p>
              <motion.p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, optio!</motion.p>
            </motion.div>
          </Toggle>
          <motion.div className='faq-line' />
        </motion.div>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Base)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #23d997;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
