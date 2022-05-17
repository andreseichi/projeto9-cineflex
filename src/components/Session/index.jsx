import { Link } from 'react-router-dom';

import { Showtime } from './Showtime';

import { Container, Day, Showtimes } from './styles';

export function Session(props) {
  return (
    <Container>
      <Day>
        <span>
          {props.weekday} - {props.date}
        </span>

        <Showtimes>
          {props.showtimes?.map((showtime) => (
            <Link to={`/assentos/${showtime.id}`} key={showtime.name}>
              <Showtime name={showtime.name} />
            </Link>
          ))}
        </Showtimes>
      </Day>
    </Container>
  );
}
