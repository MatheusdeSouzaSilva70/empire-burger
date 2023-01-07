import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 64px;
  padding: 0 24px;

  position: fixed;
  top: 0;
  z-index: 1;

  backdrop-filter: blur(5px);

  @media (min-width: 1050px) {
    justify-content: center;
  }
`;
