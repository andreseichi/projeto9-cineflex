import { Container } from './styles';

export function Seat({ name, isAvailable }) {
  return <Container isAvailable={isAvailable}>{name}</Container>;
}
