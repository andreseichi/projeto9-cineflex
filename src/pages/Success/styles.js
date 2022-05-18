import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: center;

  color: #247a6b;

  margin-top: 44px;
  margin-bottom: 10px;
`;

export const OrderSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 0 28px;
  margin-bottom: 64px;
`;

export const SessionDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: #293845;

  margin-top: 46px;
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;

  margin-bottom: 4px;
`;

export const Text = styled.span`
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.04em;
`;
