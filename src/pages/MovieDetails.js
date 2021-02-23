import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { MovieState } from '../data/movieState';

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt='movie' />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award key={award.title} title={award.title} description={award.description} />
            ))}
          </Awards>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const Award = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </div>
  );
};

export default MovieDetails;
