import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { Header } from '../../components/Header';
import { Seat } from '../../components/Seat';

import {
  Container,
  Title,
  SeatsSection,
  SeatsLabels,
  SeatsLabel,
} from './styles';

export function Seats() {
  const { idSessao } = useParams();

  const [seats, setSeats] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
      )
      .then(({ data }) => {
        setSeats(data.seats);
      });
  }, []);

  return (
    <Container>
      <Header />

      <Title>Selecione o(s) assento(s)</Title>

      <SeatsSection>
        {seats?.map((seat) => (
          <Seat name={seat.name} isAvailable={seat.isAvailable} key={seat.id} />
        ))}
      </SeatsSection>

      <SeatsLabels>
        <SeatsLabel>
          <Seat />
          <span>Selecionado</span>
        </SeatsLabel>

        <SeatsLabel>
          <Seat isAvailable />
          <span>Disponível</span>
        </SeatsLabel>

        <SeatsLabel>
          <Seat />
          <span>Indisponível</span>
        </SeatsLabel>
      </SeatsLabels>
    </Container>
  );
}
