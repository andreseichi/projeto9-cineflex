import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { Header } from '../../components/Header';
import { Seat } from '../../components/Seat';
import { Footer } from '../../components/Footer';

import {
  Container,
  Title,
  SeatsSection,
  SeatsLabels,
  SeatsLabel,
  Form,
  FormInput,
  FormLabel,
  Input,
} from './styles';

import { ContainerSelected as SeatSelected } from '../../components/Seat/styles';
import { Button } from '../../components/Button';

export function Seats(props) {
  const { idSessao } = useParams();

  const navigate = useNavigate();

  const [session, setSession] = useState({});
  const [seats, setSeats] = useState([]);
  const [seatsReserved, setSeatsReserved] = useState([]);
  const [seatsReservedName, setSeatsReservedName] = useState([]);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
      )
      .then(({ data }) => {
        console.log(data);
        setSession(data);
        setSeats(data.seats);
      });
  }, []);

  function update(id, name) {
    const newSeatsReserved = [...seatsReserved];
    const newSeatsReservedName = [...seatsReservedName];
    const hasSeatReserved = newSeatsReserved.includes(id);

    if (hasSeatReserved) {
      const newSeatsReservedFiltered = newSeatsReserved.filter(
        (seatId) => seatId !== id
      );
      const newSeatsReservedNameFiltered = newSeatsReservedName.filter(
        (seatName) => seatName !== name
      );
      setSeatsReserved(newSeatsReservedFiltered);
      setSeatsReservedName(newSeatsReservedNameFiltered);
      return;
    }

    newSeatsReserved.push(id);
    newSeatsReservedName.push(name);

    setSeatsReserved(newSeatsReserved);
    setSeatsReservedName(newSeatsReservedName);
  }

  function completeOrder(event) {
    event.preventDefault();
    if (name === '' || cpf === '' || seatsReserved.length === 0) {
      return;
    }

    const request = {
      ids: seatsReserved,
      name,
      cpf,
    };

    axios
      .post(
        'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
        request
      )
      .then((response) => {
        if (response.status === 200) {
          console.log('deu tudo certo');
          const orderObject = {
            ...request,
            session,
            seatsReservedName,
          };

          props.getOrder(orderObject);

          navigate('/sucesso');
        }
      });
  }

  return (
    <Container>
      <Header />

      <Title>Selecione o(s) assento(s)</Title>

      <SeatsSection>
        {seats?.map((seat) => (
          <Seat
            name={seat.name}
            isAvailable={seat.isAvailable}
            key={seat.id}
            update={update}
            id={seat.id}
          />
        ))}
      </SeatsSection>

      <SeatsLabels>
        <SeatsLabel>
          <SeatSelected />
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

      <Form>
        <FormInput>
          <FormLabel htmlFor="name">Nome do comprador</FormLabel>
          <Input
            placeholder="Digite seu nome..."
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormInput>
        <FormInput>
          <FormLabel htmlFor="cpf">CPF do comprador</FormLabel>
          <Input
            placeholder="Digite seu CPF..."
            id="cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />
        </FormInput>

        <Button onClick={completeOrder}>Reservar assento(s)</Button>
      </Form>

      <Footer
        url={session.movie?.posterURL}
        title={session.movie?.title}
        name={session.name}
        weekday={session.day?.weekday}
      />
    </Container>
  );
}
