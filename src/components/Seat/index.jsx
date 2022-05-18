import { useState } from 'react';

import { Container, ContainerSelected } from './styles';

export function Seat({ name, isAvailable, update, id }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleClick() {
    setIsSelected(!isSelected);
  }

  function handleNotAvailable() {
    alert('Esse assento não está disponível');
  }

  return (
    <>
      {isSelected && isAvailable ? (
        <ContainerSelected
          isSelected={isSelected}
          onClick={() => {
            handleClick();
            isAvailable ? update(id, name) : handleNotAvailable();
          }}
        >
          {name}
        </ContainerSelected>
      ) : (
        <Container
          isAvailable={isAvailable}
          isSelected={isSelected}
          onClick={() => {
            handleClick();
            isAvailable ? update(id, name) : handleNotAvailable();
          }}
        >
          {name}
        </Container>
      )}
    </>
  );
}
