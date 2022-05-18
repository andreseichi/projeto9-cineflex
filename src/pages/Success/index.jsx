import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';

import { Button } from '../../components/Button';

import {
  Container,
  Title,
  OrderSection,
  SessionDetails,
  Heading,
  Text,
} from './styles';

export function Success(props) {
  const [order, setOrder] = useState(props.order);

  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  return (
    <Container>
      <Header />

      <Title>Pedido feito com sucesso!</Title>

      <OrderSection>
        <SessionDetails>
          <Heading>Filme e sessão</Heading>
          <Text>{order.session.movie.title}</Text>
          <Text>
            {order.session.day.date} {order.session.name}
          </Text>
        </SessionDetails>

        <SessionDetails>
          <Heading>
            {order.seatsReservedName.length > 1 ? 'Ingressos' : 'Ingresso'}
          </Heading>
          {order.seatsReservedName.map((seat) => (
            <Text>Assento {seat}</Text>
          ))}
        </SessionDetails>

        <SessionDetails>
          <Heading>Comprador</Heading>

          <Text>Nome: {order.name}</Text>
          <Text>CPF: {order.cpf}</Text>
        </SessionDetails>
      </OrderSection>

      <Button onClick={goHome}>Reservar assento(s)</Button>
    </Container>
  );
}
