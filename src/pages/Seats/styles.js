import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

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

export const SeatsSection = styled.section`
  width: 100%;
  padding: 0 20px;

  display: grid;
  grid-template-rows: repeat(5, minmax(20px, 26px));
  grid-template-columns: repeat(10, minmax(20px, 26px));
  column-gap: 8px;
  row-gap: 18px;
  align-items: center;
  justify-content: center;
`;

export const SeatsLabels = styled.div`
  width: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 18px;
`;

export const SeatsLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 13px;
    line-height: 15px;
    align-items: center;
    letter-spacing: -0.013em;

    color: #4e5a65;
  }
`;
