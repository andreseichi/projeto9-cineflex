import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { Header } from '../../components/Header';
import { Session } from '../../components/Session';
import { Footer } from '../../components/Footer';

import { Container, Title, SessionsSection } from './styles';

export function Sessions() {
  const { idFilme } = useParams();

  const [sessions, setSessions] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
      )
      .then(({ data }) => {
        setSessions(data);
      });
  }, [idFilme]);

  return (
    <Container>
      <Header />

      <Title>Selecione o horário</Title>

      <SessionsSection>
        {sessions.days?.map((session) => (
          <Session
            weekday={session.weekday}
            date={session.date}
            showtimes={session.showtimes}
            key={session.id}
          />
        ))}
      </SessionsSection>

      <Footer url={sessions.posterURL} title={sessions.title} />
    </Container>
  );
}
