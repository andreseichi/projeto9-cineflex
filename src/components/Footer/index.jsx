import { Container, Image } from './styles';

export function Footer(props) {
  return (
    <Container>
      <Image>
        <img src={props.url} alt={props.title + ' poster'} />
      </Image>
    </Container>
  );
}
