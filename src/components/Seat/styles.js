import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ isAvailable }) => (isAvailable ? '#C3CFD9;' : '#FBE192;')};
  border: 1px solid
    ${({ isAvailable }) => (isAvailable ? '#808f9d;' : '#F7C52B;')};
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 26px;
  height: 26px;

  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.04em;
  color: #000000;

  cursor: pointer;
`;
