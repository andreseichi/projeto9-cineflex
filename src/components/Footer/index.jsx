import {
  Container,
  Image,
  SessionInfo,
  MovieTitle,
  SessionDay,
} from './styles';

export function Footer(props) {
  return (
    <Container>
      <Image>
        <img src={props.url} alt={props.title + ' poster'} />
      </Image>

      <SessionInfo>
        <MovieTitle>{props.title}</MovieTitle>
        <SessionDay>
          {props.weekday} - {props.date}
        </SessionDay>
      </SessionInfo>
    </Container>
  );
}
