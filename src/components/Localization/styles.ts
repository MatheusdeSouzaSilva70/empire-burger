import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: left;

  margin-top: 64px;
  margin-bottom: 20px;
`;

export const ContainerMap = styled.div`
  margin-top: 16px;
  width: 100vw;

  iframe {
    height: 207px;
    width: 100%;
    border: none;
  }
`;
