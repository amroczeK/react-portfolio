import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Base = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2; // Move text in front of Wave.js
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button: {
      margin: 2rem 0rem 5rem 0rem; // Push it up 2 rem and down 5 rem
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2; // Move text in front of Wave.js
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 1300px) {
      margin-top: 3rem;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
