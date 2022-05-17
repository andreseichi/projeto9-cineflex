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
            <Showtime name={showtime.name} />
          ))}
        </Showtimes>
      </Day>
    </Container>
  );
}
