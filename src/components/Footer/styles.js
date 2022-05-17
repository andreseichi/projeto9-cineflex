import styled from 'styled-components';

export const Container = styled.footer`
  max-height: 120px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;

  padding: 14px 10px;
`;

export const Image = styled.div`
  width: 64px;
  background-color: #fff;
  padding: 8px;

  img {
    width: 100%;
  }
`;

export const SessionInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 12px;
`;

export const MovieTitle = styled.h3`
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;

  color: #293845;
`;
