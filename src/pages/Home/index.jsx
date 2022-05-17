import { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

import { Container, Title, Movies } from './styles';
import { Link } from 'react-router-dom';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
      .then(({ data }) => {
        setMovies(data);
      });
  }, []);

  return (
    <Container>
      <Header />

      <Title>Selecione o filme</Title>

      <Movies>
        {movies?.map((movie) => (
          <Link to={`sessoes/${movie.id}`} key={movie.title}>
            <Movie url={movie.posterURL} title={movie.title}>
              {/* <h3>{movie.title}</h3>
            <span>{movie.releaseDate}</span>
            <img src={movie.posterURL} alt="" />
            <span>{movie.overview}</span> */}
            </Movie>
          </Link>
        ))}
      </Movies>
    </Container>
  );
}
