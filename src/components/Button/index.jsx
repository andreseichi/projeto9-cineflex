import { Container } from './styles';

export function Button({ children, onClick }) {
  return <Container onClick={onClick}>{children}</Container>;
}
