import React from 'react';
import { Link } from 'react-router-dom';
import { MovieState } from '../data/movieState';

import styled from 'styled-components';

const OurWork = () => {
  return (
    <Work>
      {MovieState.map((e) => (
        <Movie>
          <Link to={e.url} style={{ textDecoration: 'none' }}>
            <h2>{e.title}</h2>
          </Link>
          <div className='line' />
          <Link to={e.url} style={{ textDecoration: 'none' }}>
            <img src={e.mainImg} alt={e.mainImg.toString()} />
          </Link>
        </Movie>
      ))}
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem; // Align container to Logo and Nav
  h2 {
    color: white;
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
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

export default OurWork;
