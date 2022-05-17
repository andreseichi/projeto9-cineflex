import { Container } from './styles';

export function Movie({ url, title }) {
  return (
    <Container>
      <img src={url} alt={title + ' poster'} />
    </Container>
  );
}
