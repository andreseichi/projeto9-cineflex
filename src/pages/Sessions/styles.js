import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: center;

  color: #293845;

  margin: 44px 0;
`;

export const SessionsSection = styled.section`
  width: 100%;
  padding: 0 25px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: wrap;
`;
