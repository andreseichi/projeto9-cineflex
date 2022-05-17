import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-inline: 24px;
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Showtimes = styled.div`
  margin: 20px 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 10px;

  flex-wrap: wrap;
`;
