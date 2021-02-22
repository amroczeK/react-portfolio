import React from 'react';
import home1 from '../images/home1.png';
import { Base, Description, Image, Hide } from '../styles';

const AboutSection = () => {
  return (
    <Base>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide className='hide'>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide className='hide'>
            <h2>true.</h2>
          </Hide>
        </div>
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
